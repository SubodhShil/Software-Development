// all necessary imports and styles

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TextParaphraserScreen = () => {
    // declared states
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('Fluency');
    const [isLoading, setIsLoading] = useState(false);
    const [showStyleDropdown, setShowStyleDropdown] = useState(false);

    // Paraphrasing styles
    const styles = [
        { id: 'Fluency', name: 'Fluency', description: 'Make the text flow naturally and smoothly, focusing on readability.' },
        { id: 'Humanize', name: 'Humanize', description: 'Make the text sound more conversational, warm, and relatable.' },
        { id: 'Formal', name: 'Formal', description: 'Use professional language, avoid contractions, and maintain a respectful tone.' },
        { id: 'Academic', name: 'Academic', description: 'Use scholarly language, precise terminology, and complex sentence structures.' },
        { id: 'Simple', name: 'Simple', description: 'Use straightforward language, short sentences, and common words.' },
        { id: 'Creative', name: 'Creative', description: 'Use vivid language, metaphors, and unique expressions.' },
        { id: 'Shorten', name: 'Shorten', description: 'Condense the text while preserving the key information.' }
    ];
    const handleParaphrase = async () => {

        // if user input is empty than don't call the api
        if (!inputText.trim()) {
            Alert.alert('Error', 'Please enter some text to paraphrase');
            return;
        }

        setIsLoading(true);
        setOutputText('');
        
        // sending user input text to the backend api
        try {
            const response = await fetch('https://langchain-grammar-check-api.onrender.com/paraphraser/gemini/paraphrase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: inputText,
                    style: selectedStyle
                }),
            });
            

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            setOutputText(data.paraphrased_text || 'No result returned from the API.');
        } catch (error) {
            console.error('Error calling paraphrasing API:', error);
            Alert.alert('Error', 'Failed to paraphrase text. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleClearText = () => {
        setInputText('');
        setOutputText('');
    };

    const handleCopyText = () => {
        if (outputText) {
            // In a real app, you would use Clipboard API here
            Alert.alert('Success', 'Text copied to clipboard!');
        }
    };

    return (
        <View style={componentStyles.container}>
            <ScrollView style={componentStyles.scrollView}>
                
                {/* Input Section */}
                <View style={componentStyles.section}>
                    <Text style={componentStyles.sectionTitle}>Original Text</Text>
                    <TextInput
                        style={componentStyles.textInput}
                        multiline
                        placeholder="Enter text to paraphrase..."
                        value={inputText}
                        onChangeText={setInputText}
                        textAlignVertical="top"
                    />
                </View>

                {/* Style Selection */}
                <View style={componentStyles.section}>
                    <Text style={componentStyles.sectionTitle}>Paraphrasing Style</Text>
                    <TouchableOpacity 
                        style={componentStyles.dropdownButton}
                        onPress={() => setShowStyleDropdown(!showStyleDropdown)}
                    >
                        <Text style={componentStyles.dropdownButtonText}>{selectedStyle}</Text>
                        <Ionicons 
                            name={showStyleDropdown ? "chevron-up" : "chevron-down"} 
                            size={24} 
                            color="#4a90e2" 
                        />
                    </TouchableOpacity>

                    {showStyleDropdown && (
                        <View style={componentStyles.dropdownMenu}>
                            {styles.map((style) => (
                                <TouchableOpacity
                                    key={style.id}
                                    style={[
                                        componentStyles.dropdownItem,
                                        selectedStyle === style.id && componentStyles.selectedDropdownItem
                                    ]}
                                    onPress={() => {
                                        setSelectedStyle(style.id);
                                        setShowStyleDropdown(false);
                                    }}
                                >
                                    <Text style={componentStyles.dropdownItemTitle}>{style.name}</Text>
                                    <Text style={componentStyles.dropdownItemDescription}>{style.description}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>

                {/* Action Buttons */}
                <View style={componentStyles.actionButtonsContainer}>
                    <TouchableOpacity 
                        style={[componentStyles.actionButton, componentStyles.clearButton]} 
                        onPress={handleClearText}
                    >
                        <Ionicons name="trash-outline" size={20} color="white" />
                        <Text style={componentStyles.actionButtonText}>Clear</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={[componentStyles.actionButton, componentStyles.paraphraseButton]} 
                        onPress={handleParaphrase}
                        disabled={isLoading}
                    >
                        <Ionicons name="refresh" size={20} color="white" />
                        <Text style={componentStyles.actionButtonText}>Paraphrase</Text>
                    </TouchableOpacity>
                </View>

                {/* Output Section */}
                {(isLoading || outputText) && (
                    <View style={componentStyles.section}>
                        <Text style={componentStyles.sectionTitle}>Paraphrased Text</Text>
                        
                        {isLoading ? (
                            <View style={componentStyles.loadingContainer}>
                                <ActivityIndicator size="large" color="#4a90e2" />
                                <Text style={componentStyles.loadingText}>Paraphrasing...</Text>
                            </View>
                        ) : (
                            <View style={componentStyles.outputContainer}>
                                <Text style={componentStyles.outputText}>{outputText}</Text>
                                
                                <TouchableOpacity 
                                    style={componentStyles.copyButton} 
                                    onPress={handleCopyText}
                                >
                                    <Ionicons name="copy-outline" size={20} color="white" />
                                    <Text style={componentStyles.copyButtonText}>Copy</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const componentStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        minHeight: 120,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
    },
    dropdownButton: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownButtonText: {
        fontSize: 16,
        color: '#333',
    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    dropdownItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    selectedDropdownItem: {
        backgroundColor: '#f0f7ff',
    },
    dropdownItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    dropdownItemDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 4,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        flex: 1,
    },
    clearButton: {
        backgroundColor: '#ff6b6b',
        marginRight: 8,
    },
    paraphraseButton: {
        backgroundColor: '#4a90e2',
        marginLeft: 8,
    },
    actionButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 16,
    },
    outputContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    outputText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4a90e2',
        padding: 8,
        borderRadius: 8,
        marginTop: 12,
        alignSelf: 'flex-end',
    },
    copyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 4,
    },
});

export default TextParaphraserScreen;