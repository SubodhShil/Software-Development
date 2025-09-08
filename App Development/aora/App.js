import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Platform, StatusBar } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AuthScreen from "./AuthScreen";
import FeaturesScreen from "./FeaturesScreen";
import MultiModalChat from "./MultiModalChat";


// Import our new components
import SplashScreen from "./components/SplashScreen";
import AppHeader from "./components/AppHeader";
import OCRFeature from "./components/OCRFeature";
import GrammarChecker from "./components/GrammarChecker";
import TextParaphraserScreen from "./components/TextParaphraserScreen";
import YoutubeSummarizer from './components/YoutubeSummarizer';


export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [currentFeature, setCurrentFeature] = useState("ocr");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      setIsLoading(false);
      setShowAuth(true);
    }, 2000);
  }, []);

  // Handle Google authentication
  const handleAuthenticate = async (type) => {
    if (type === "google") {
      try {
        // Mock a successful Google authentication
        const mockGoogleResponse = {
          user: {
            id: "123456789",
            name: "Demo User",
            email: "demo@example.com",
            photoUrl: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          accessToken: "mock-access-token"
        };

        // Set user profile from auth response
        setUserProfile(mockGoogleResponse.user);
        setIsAuthenticated(true);
        setShowAuth(false);
        setShowFeatures(true);
      } catch (error) {
        Alert.alert("Authentication Failed", "Could not sign in with Google");
        console.error("Google auth error:", error);
      }
    }
  };

  // Skip authentication
  const handleSkipAuth = () => {
    setShowAuth(false);
    setShowFeatures(true);
  };


  const handleSelectFeature = (featureId) => {
    setCurrentFeature(featureId);
    setShowFeatures(false); // Hide features screen and show the selected feature
  };


  // Navigate back to features selection
  const handleBackToFeatures = () => {
    setShowFeatures(true);
  };


  // Sign out function
  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Sign Out",
        onPress: () => {
          setIsAuthenticated(false);
          setUserProfile(null);
          setShowAuth(true);
          setShowFeatures(false);
        }
      }
    ]);
  };

  // Request permissions for camera and media library
  const requestPermissions = async () => {
    if (Platform.OS !== "web") {
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      const libraryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraPermission.status !== "granted" ||
        libraryPermission.status !== "granted"
      ) {
        Alert.alert(
          "Permission needed",
          "Camera and media library permissions are required to use this app"
        );
        return false;
      }
      return true;
    }
    return true;
  };

  // Get feature title for header
  const getFeatureTitle = () => {
    switch (currentFeature) {
      case "ocr":
        return "Image to Text";
      case "rephrase":
        return "Text Paraphrasing";
      case "grammar":
        return "Grammar Checker";
      case "multi-query":
        return "Multi-Model Query";
      case "youtube":
        return "YouTube Summarizer";
      default:
        return "Aora";
    }
  };

  // Initial loading screen
  if (isLoading) {
    return <SplashScreen />;
  }

  // Show authentication screen
  if (showAuth) {
    return (
      <AuthScreen onAuthenticate={handleAuthenticate} onSkip={handleSkipAuth} />
    );
  }

  // Show features selection screen
  if (showFeatures) {
    return (
      <FeaturesScreen
        onSelectFeature={handleSelectFeature}
        userProfile={userProfile}
      />
    );
  }

  // Feature-specific screens
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />

      {/* Only show the header for features other than multi-query */}
      {currentFeature !== "multi-query" && (
        <AppHeader
          title={getFeatureTitle()}
          onBackPress={handleBackToFeatures}
          userProfile={isAuthenticated ? userProfile : null}
          onProfilePress={handleSignOut}
        />
      )}

      {/* Show MultiModalChat component for multi-query feature */}
      {currentFeature === "multi-query" ? (
        <MultiModalChat
          onBackToFeatures={handleBackToFeatures}
          navigation={{ navigate: () => { } }}
        />
      ) : currentFeature === "ocr" ? (
        <OCRFeature
          images={images}
          setImages={setImages}
          requestPermissions={requestPermissions}
        />
      ) : currentFeature === "rephrase" ? (
        <TextParaphraserScreen />
      ) : currentFeature === 'youtube' ? (
        <YoutubeSummarizer />
      ) : (
        <GrammarChecker />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
