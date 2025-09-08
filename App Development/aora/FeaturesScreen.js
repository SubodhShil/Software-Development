// all necessary library imports and styles go here  
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeatureCard = ({ title, description, icon, onPress, isActive }) => (
    <TouchableOpacity
        style={[styles.featureCard, isActive && styles.activeFeatureCard]}
        onPress={onPress}
    >
        <View style={styles.featureIconContainer}>
            <Ionicons name={icon} size={32} color={isActive ? "#4a90e2" : "#666"} />
        </View>
        <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>{title}</Text>
            <Text style={styles.featureDescription}>{description}</Text>
        </View>
        <Ionicons
            name="chevron-forward"
            size={24}
            color="#bbb"
            style={styles.arrowIcon}
        />
    </TouchableOpacity>
);

const FeaturesScreen = ({ onSelectFeature, userProfile }) => {

    // All app features are listed below
    const features = [
        {
            id: 'ocr',
            title: 'Image-to-Text Conversion',
            description: 'OCR-based transcription to extract text from images',
            icon: 'document-text',
            isActive: true
        },
        {
            id: 'rephrase',
            title: 'Text Paraphrasing & Correction',
            description: 'Grammar correction and paraphrasing with Generative AI',
            icon: 'create',
            isActive: true
        },
        {
            id: 'grammar',
            title: 'Grammar Checker',
            description: 'Check grammar based on user input',
            icon: 'checkmark-done-outline',
            isActive: true
        },
        {
            id: 'multi-query',
            title: 'Multi-Model Querying',
            description: 'Get diverse AI responses to your questions',
            icon: 'chatbubbles',
            isActive: true
        },
        {
            id: 'youtube',
            title: 'YouTube Summarizer',
            description: 'Generate text summaries from YouTube videos',
            icon: 'logo-youtube',
            isActive: true
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Aora</Text>
                {userProfile && userProfile.photoUrl && (
                    <Image source={{ uri: userProfile.photoUrl }} style={styles.profileImage} />
                )}
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>
                    Welcome{userProfile ? `, ${userProfile.name.split(' ')[0]}` : ''}!
                </Text>
                <Text style={styles.welcomeSubtitle}>
                    Select a feature to get started
                </Text>
            </View>
            
            {/* Scrollable feature list */}
            <ScrollView style={styles.featuresContainer}>
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        isActive={feature.isActive}
                        onPress={() => onSelectFeature(feature.id)}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'white',
    },
    welcomeContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#777',
    },
    featuresContainer: {
        flex: 1,
        padding: 15,
    },
    featureCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    activeFeatureCard: {
        borderLeftWidth: 5,
        borderLeftColor: '#4a90e2',
    },
    featureIconContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 30,
        marginRight: 15,
    },
    featureTextContainer: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    featureDescription: {
        fontSize: 14,
        color: '#777',
        lineHeight: 20,
    },
    arrowIcon: {
        marginLeft: 10,
    },
});

export default FeaturesScreen;