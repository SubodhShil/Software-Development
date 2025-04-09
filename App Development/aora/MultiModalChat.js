import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function MultiModalChat({ navigation, onBackToFeatures }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'assistant',
            content: 'Hi there! I can help answer questions about images or text. Try uploading an image or asking me something!',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const scrollViewRef = useRef();

    // Scroll to bottom when messages change
    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleSendMessage = () => {
        if (inputText.trim() === '' && !selectedImage) return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            role: 'user',
            content: inputText,
            image: selectedImage,
            timestamp: new Date()
        };

        setMessages([...messages, userMessage]);
        setInputText('');
        setSelectedImage(null);
        setIsTyping(true);

        // Simulate AI response after a delay
        setTimeout(() => {
            const responseMessage = {
                id: messages.length + 2,
                role: 'assistant',
                content: generateAIResponse(inputText, selectedImage),
                timestamp: new Date()
            };

            setMessages(prev => [...prev, responseMessage]);
            setIsTyping(false);
        }, 1500);
    };

    // Mock AI response generation
    const generateAIResponse = (text, image) => {
        if (image) {
            if (text.toLowerCase().includes('describe')) {
                return "This appears to be an image containing [description would be based on actual image content]. Is there anything specific about it you'd like to know?";
            } else {
                return "I've analyzed the image you provided. " +
                    (text ? `Regarding your question about "${text}": Based on what I can see, [relevant response to the query about the image].` :
                        "What would you like to know about this image?");
            }
        } else {
            // Text-only responses for common queries
            if (text.toLowerCase().includes('pytorch lightning')) {
                return "Yes! PyTorch Lightning is like a clean architecture layer built on top of vanilla PyTorch. It removes a lot of repetitive boilerplate (training loops, optimizer setup, logging) and lets you focus purely on the model and logic. Perfect for production-grade or research-ready projects.";
            } else if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
                return "Hello! How can I assist you today?";
            } else {
                return `Based on your question about "${text}", here's what I can tell you: [detailed response would be generated based on the actual query].`;
            }
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage(null);
    };

    const renderMessage = (message) => {
        const isUser = message.role === 'user';

        return (
            <View
                key={message.id}
                style={[
                    styles.messageContainer,
                    isUser ? styles.userMessageContainer : styles.assistantMessageContainer
                ]}
            >
                {message.image && (
                    <View style={styles.messageImageContainer}>
                        <Image source={{ uri: message.image }} style={styles.messageImage} />
                    </View>
                )}
                <Text style={[styles.messageText, isUser ? styles.userMessageText : styles.assistantMessageText]}>
                    {message.content}
                </Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={onBackToFeatures}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Multi-Modal Query</Text>
                <TouchableOpacity style={styles.settingsButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.messagesContainer}
                ref={scrollViewRef}
                contentContainerStyle={styles.messagesList}
            >
                {messages.map(renderMessage)}

                {isTyping && (
                    <View style={styles.typingIndicator}>
                        <ActivityIndicator size="small" color="#4a90e2" />
                        <Text style={styles.typingText}>AI is thinking...</Text>
                    </View>
                )}
            </ScrollView>

            {selectedImage && (
                <View style={styles.selectedImageContainer}>
                    <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                    <TouchableOpacity style={styles.removeImageButton} onPress={removeSelectedImage}>
                        <Ionicons name="close-circle" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.attachButton} onPress={pickImage}>
                    <Ionicons name="image" size={24} color="#4a90e2" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                    <Ionicons name="camera" size={24} color="#4a90e2" />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Ask anything..."
                    multiline
                />

                <TouchableOpacity
                    style={[styles.sendButton, (!inputText.trim() && !selectedImage) ? styles.sendButtonDisabled : {}]}
                    onPress={handleSendMessage}
                    disabled={!inputText.trim() && !selectedImage}
                >
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
    },
    header: {
        backgroundColor: '#2a2a2a',
        padding: 15,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        left: 15,
        top: 48,
    },
    settingsButton: {
        position: 'absolute',
        right: 15,
        top: 48,
    },
    messagesContainer: {
        flex: 1,
    },
    messagesList: {
        padding: 15,
        paddingBottom: 20,
    },
    messageContainer: {
        marginVertical: 8,
        maxWidth: '80%',
        padding: 12,
        borderRadius: 20,
    },
    userMessageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#4a90e2',
        borderBottomRightRadius: 4,
    },
    assistantMessageContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#333',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: 16,
        lineHeight: 22,
    },
    userMessageText: {
        color: 'white',
    },
    assistantMessageText: {
        color: 'white',
    },
    messageImageContainer: {
        marginBottom: 10,
    },
    messageImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    typingIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 20,
        marginVertical: 8,
    },
    typingText: {
        color: '#aaa',
        marginLeft: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#2a2a2a',
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    attachButton: {
        padding: 8,
    },
    cameraButton: {
        padding: 8,
    },
    input: {
        flex: 1,
        backgroundColor: '#444',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 8,
        color: 'white',
        maxHeight: 100,
    },
    sendButton: {
        backgroundColor: '#4a90e2',
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: '#666',
    },
    selectedImageContainer: {
        padding: 10,
        backgroundColor: '#333',
        position: 'relative',
    },
    selectedImage: {
        height: 100,
        borderRadius: 8,
    },
    removeImageButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 12,
    }
});