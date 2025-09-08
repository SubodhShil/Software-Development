import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GrammarChecker = () => {
    const [text, setText] = useState('');
    const [correctedText, setCorrectedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckGrammar = async () => {
        if (!text.trim()) {
            Alert.alert('Error', 'Please enter some text to check.');
            return;
        }

        setIsLoading(true);
        setCorrectedText(''); // Clear previous results
        
        try {
            console.log('Sending request with text:', text.trim());
            
            const response = await fetch('https://langchain-grammar-check-api.onrender.com/grammar/gemini/check_grammar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ 
                    text: text.trim() 
                })
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            // Get response text first to debug
            const responseText = await response.text();
            console.log('Raw response:', responseText);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
            }

            // Try to parse JSON
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                throw new Error('Invalid JSON response from server');
            }

            console.log('Parsed data:', data);

            // Handle different possible response formats
            let corrected = '';
            if (data.text) {
                corrected = data.text;
            } else if (data.corrected_text) {
                corrected = data.corrected_text;
            } else if (data.result) {
                corrected = data.result;
            } else if (data.correction) {
                corrected = data.correction;
            } else if (typeof data === 'string') {
                corrected = data;
            } else {
                console.log('Unexpected response format:', data);
                corrected = text; // Fallback to original text
                Alert.alert('Info', 'No corrections needed or unexpected response format.');
            }

            setCorrectedText(corrected);

            // Show comparison if text was actually corrected
            if (corrected !== text.trim()) {
                Alert.alert('Success', 'Text has been corrected!');
            } else {
                Alert.alert('Info', 'No grammar errors found!');
            }

        } catch (error) {
            console.error('Grammar check error:', error);
            Alert.alert(
                'Error', 
                `Failed to check grammar: ${error.message}. Please check your internet connection and try again.`
            );
        } finally {
            setIsLoading(false);
        }
    };

    const clearText = () => {
        setText('');
        setCorrectedText('');
    };

    const copyResult = () => {
        if (correctedText) {
            // In a real app, you'd use Clipboard API
            Alert.alert('Info', 'Copy functionality would be implemented here');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Grammar Checker</Text>
                <Text style={styles.description}>
                    Enter any text below to check for grammatical errors and get corrections.
                </Text>

                <View style={styles.inputContainer}>
                    <View style={styles.inputHeader}>
                        <Text style={styles.inputLabel}>Original Text</Text>
                        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
                            <Ionicons name="close-circle" size={20} color="#6c757d" />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        placeholder="Type or paste your text here..."
                        value={text}
                        onChangeText={setText}
                        textAlignVertical="top"
                    />
                </View>

                <TouchableOpacity
                    style={[styles.checkButton, isLoading && styles.buttonDisabled]}
                    onPress={handleCheckGrammar}
                    disabled={isLoading || !text.trim()}
                >
                    {isLoading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator color="#fff" size="small" />
                            <Text style={styles.loadingText}>Checking...</Text>
                        </View>
                    ) : (
                        <Text style={styles.checkButtonText}>Check Grammar</Text>
                    )}
                </TouchableOpacity>

                {correctedText ? (
                    <View style={styles.resultsContainer}>
                        <View style={styles.resultsHeader}>
                            <Text style={styles.resultsTitle}>Corrected Text:</Text>
                            <TouchableOpacity onPress={copyResult} style={styles.copyButton}>
                                <Ionicons name="copy" size={20} color="#28a745" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.correctedText}>{correctedText}</Text>
                        
                        {/* Show comparison if texts are different */}
                        {correctedText !== text.trim() && (
                            <View style={styles.comparisonNote}>
                                <Ionicons name="checkmark-circle" size={16} color="#28a745" />
                                <Text style={styles.comparisonText}>Text has been corrected</Text>
                            </View>
                        )}
                    </View>
                ) : null}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 50,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 25,
        textAlign: 'center',
        lineHeight: 22,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#495057',
    },
    clearButton: {
        padding: 4,
    },
    textInput: {
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        borderColor: '#dee2e6',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    checkButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#007bff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonDisabled: {
        backgroundColor: '#6c757d',
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loadingText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
    resultsContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        borderColor: '#dee2e6',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    resultsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    resultsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#28a745',
    },
    copyButton: {
        padding: 4,
    },
    correctedText: {
        fontSize: 16,
        color: '#212529',
        lineHeight: 24,
    },
    comparisonNote: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
    },
    comparisonText: {
        fontSize: 14,
        color: '#28a745',
        marginLeft: 5,
        fontStyle: 'italic',
    },
});

export default GrammarChecker;