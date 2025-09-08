import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert,
    Image,
    Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Markdown from 'react-native-markdown-display';

const { width } = Dimensions.get('window');

const YoutubeSummarizer = () => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [videoData, setVideoData] = useState(null);

    // Extract video ID from YouTube URL
    const extractVideoId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Get YouTube thumbnail
    const getYoutubeThumbnail = (videoId) => {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    // Validate and preview YouTube link
    const handleLinkChange = (text) => {
        setYoutubeLink(text);
        const videoId = extractVideoId(text);
        if (videoId) {
            setVideoData({
                id: videoId,
                thumbnail: getYoutubeThumbnail(videoId)
            });
        } else {
            setVideoData(null);
        }
    };

    const handleSummarize = async () => {
        if (!youtubeLink.trim()) {
            Alert.alert('Error', 'Please enter a YouTube link to summarize.');
            return;
        }

        const videoId = extractVideoId(youtubeLink);
        if (!videoId) {
            Alert.alert('Error', 'Please enter a valid YouTube link.');
            return;
        }

        setIsLoading(true);
        setSummary('');

        try {
            // Updated API endpoint and request format
            const response = await fetch('http://127.0.0.1:8000/api/yt-video/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: youtubeLink, // Changed from video_url to url
                }),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('API Error:', errorData);
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            setSummary(data.summary || data.message || 'No summary returned from the API.');
        } catch (error) {
            console.error('Error calling summarization API:', error);
            Alert.alert('Error', `Failed to summarize the video: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearText = () => {
        setYoutubeLink('');
        setSummary('');
        setVideoData(null);
    };

    // Markdown styles for better formatting
    const markdownStyles = {
        body: {
            fontSize: 16,
            color: '#333',
            lineHeight: 24,
        },
        heading1: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: 12,
            marginTop: 20,
        },
        heading2: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#34495e',
            marginBottom: 10,
            marginTop: 16,
        },
        heading3: {
            fontSize: 18,
            fontWeight: '600',
            color: '#34495e',
            marginBottom: 8,
            marginTop: 12,
        },
        paragraph: {
            marginBottom: 12,
            lineHeight: 24,
        },
        list_item: {
            marginBottom: 8,
            flexDirection: 'row',
        },
        bullet_list: {
            marginBottom: 16,
        },
        ordered_list: {
            marginBottom: 16,
        },
        code_inline: {
            backgroundColor: '#f8f9fa',
            color: '#e83e8c',
            paddingHorizontal: 4,
            paddingVertical: 2,
            borderRadius: 4,
            fontSize: 14,
            fontFamily: 'monospace',
        },
        code_block: {
            backgroundColor: '#f8f9fa',
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
            borderLeftWidth: 4,
            borderLeftColor: '#007bff',
        },
        blockquote: {
            backgroundColor: '#f8f9fa',
            borderLeftWidth: 4,
            borderLeftColor: '#6c757d',
            paddingLeft: 16,
            paddingRight: 16,
            paddingVertical: 12,
            marginBottom: 16,
            fontStyle: 'italic',
        },
        strong: {
            fontWeight: 'bold',
            color: '#2c3e50',
        },
        em: {
            fontStyle: 'italic',
            color: '#495057',
        },
        hr: {
            backgroundColor: '#e9ecef',
            height: 1,
            marginVertical: 16,
        },
        table: {
            borderWidth: 1,
            borderColor: '#dee2e6',
            borderRadius: 8,
            marginBottom: 16,
        },
        th: {
            backgroundColor: '#f8f9fa',
            padding: 12,
            fontWeight: 'bold',
            borderBottomWidth: 1,
            borderBottomColor: '#dee2e6',
        },
        td: {
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#dee2e6',
        },
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="logo-youtube" size={32} color="#FF0000" />
                    <Text style={styles.headerTitle}>YouTube Summarizer</Text>
                </View>

                {/* Input Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>YouTube Link</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter YouTube link (e.g., https://www.youtube.com/watch?v=...)"
                        value={youtubeLink}
                        onChangeText={handleLinkChange}
                        multiline={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                {/* Video Preview Section */}
                {videoData && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Video Preview</Text>
                        <View style={styles.videoPreviewContainer}>
                            <Image 
                                source={{ uri: videoData.thumbnail }}
                                style={styles.thumbnail}
                                resizeMode="cover"
                            />
                            <View style={styles.playButtonOverlay}>
                                <Ionicons name="play-circle" size={64} color="rgba(255, 255, 255, 0.9)" />
                            </View>
                        </View>
                    </View>
                )}

                {/* Action Buttons */}
                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.actionButton, styles.clearButton]}
                        onPress={handleClearText}
                    >
                        <Ionicons name="trash-outline" size={20} color="white" />
                        <Text style={styles.actionButtonText}>Clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.actionButton, 
                            styles.summarizeButton,
                            (!videoData || isLoading) && styles.disabledButton
                        ]}
                        onPress={handleSummarize}
                        disabled={!videoData || isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Ionicons name="document-text-outline" size={20} color="white" />
                        )}
                        <Text style={styles.actionButtonText}>
                            {isLoading ? 'Processing...' : 'Summarize'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Output Section */}
                {(isLoading || summary) && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Summary</Text>

                        {isLoading ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#4a90e2" />
                                <Text style={styles.loadingText}>
                                    Analyzing video content and generating summary...
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.outputContainer}>
                                <ScrollView style={styles.summaryScrollView}>
                                    {/* Render markdown instead of plain text */}
                                    <Markdown style={markdownStyles}>
                                        {summary}
                                    </Markdown>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 12,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e1e5e9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    videoPreviewContainer: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    thumbnail: {
        width: '100%',
        height: (width - 32) * 9 / 16, // 16:9 aspect ratio
        backgroundColor: '#f0f0f0',
    },
    playButtonOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        gap: 12,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        flex: 1,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    clearButton: {
        backgroundColor: '#dc3545',
    },
    summarizeButton: {
        backgroundColor: '#28a745',
    },
    disabledButton: {
        backgroundColor: '#6c757d',
        opacity: 0.6,
    },
    actionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    loadingContainer: {
        alignItems: 'center',
        paddingVertical: 32,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    outputContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e1e5e9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        maxHeight: 400,
    },
    summaryScrollView: {
        padding: 16,
    },
    outputText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});

export default YoutubeSummarizer;