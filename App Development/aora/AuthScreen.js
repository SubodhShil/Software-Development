import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AuthScreen = ({ onAuthenticate, onSkip }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />
            <ImageBackground
                source={{ uri: 'https://source.unsplash.com/random/?document,scan' }}
                style={styles.backgroundImage}
                blurRadius={3}
            >
                <View style={styles.overlay}>
                    {/* App name and slogan */}

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>Aora</Text>
                        <Text style={styles.tagline}>Transform your photos with AI</Text>
                    </View>

                    <View style={styles.authContainer}>
                        <TouchableOpacity
                            style={styles.googleButton}
                            onPress={() => onAuthenticate('google')}
                        >
                            <View style={styles.googleIconContainer}>
                                <Image
                                    source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }}
                                    style={styles.googleIcon}
                                />
                            </View>
                            <Text style={styles.googleButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.skipButton}
                            onPress={onSkip}
                        >
                            <Text style={styles.skipButtonText}>Continue without account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            By continuing, you agree to our Terms of Service and Privacy Policy
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: '#183B4E',
        justifyContent: 'space-between',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.1,
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
    },
    tagline: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    authContainer: {
        width: '100%',
        padding: 20,
    },
    googleButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    googleIconContainer: {
        marginRight: 10,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    googleButtonText: {
        color: '#757575',
        fontSize: 16,
        fontWeight: '500',
    },
    skipButton: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    skipButtonText: {
        color: 'white',
        fontSize: 14,
    },
    footer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default AuthScreen;