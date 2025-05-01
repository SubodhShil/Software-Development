import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar
} from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.splashContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />
            <Text style={styles.splashLogo}>Aora</Text>
            <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
            <Text style={styles.splashTagline}>Transform your photos with AI</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: "#4a90e2",
        justifyContent: "center",
        alignItems: "center"
    },
    splashLogo: {
        fontSize: 48,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20
    },
    loader: {
        marginVertical: 20
    },
    splashTagline: {
        fontSize: 16,
        color: "white",
        marginTop: 10
    }
});

export default SplashScreen;
