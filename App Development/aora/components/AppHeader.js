import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppHeader = ({ title, onBackPress, userProfile, onProfilePress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            {userProfile && (
                <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
                    {userProfile.photoUrl ? (
                        <Image
                            source={{ uri: userProfile.photoUrl }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <Ionicons name="person-circle" size={32} color="white" />
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4a90e2',
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
    profileButton: {
        position: 'absolute',
        right: 15,
        top: 48,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'white',
    },
});

export default AppHeader;