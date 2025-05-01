import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeaturePlaceholder = ({ featureId }) => {
    // Determine icon and title based on feature ID
    const getFeatureIcon = () => {
        switch (featureId) {
            case 'rephrase':
                return 'create';
            case 'ielts':
                return 'school';
            case 'youtube':
                return 'logo-youtube';
            default:
                return 'apps';
        }
    };

    const getFeatureTitle = () => {
        switch (featureId) {
            case 'rephrase':
                return 'Text Rephrasing & Correction';
            case 'ielts':
                return 'IELTS Assistance';
            case 'youtube':
                return 'YouTube Summarizer';
            default:
                return 'Feature';
        }
    };

    return (
        <View style={styles.placeholderContainer}>
            <Ionicons
                name={getFeatureIcon()}
                size={80}
                color="#4a90e2"
            />
            <Text style={styles.placeholderTitle}>
                {getFeatureTitle()}
            </Text>
            <Text style={styles.placeholderText}>
                This feature is coming soon
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    placeholderTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    placeholderText: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
    },
});

export default FeaturePlaceholder;