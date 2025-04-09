import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import AuthScreen from './AuthScreen';
import FeaturesScreen from './FeaturesScreen';

export default function App() {
  // App state management
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [currentFeature, setCurrentFeature] = useState('ocr'); // Default to OCR
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      setIsLoading(false);
      setShowAuth(true); // Show auth screen after splash screen
    }, 2000);
  }, []);

  // Handle Google authentication
  const handleAuthenticate = async (type) => {
    if (type === 'google') {
      try {
        // Mock a successful Google authentication
        const mockGoogleResponse = {
          user: {
            id: "123456789",
            name: "Demo User",
            email: "demo@example.com",
            photoUrl: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          accessToken: "mock-access-token",
        };

        // Set user profile from auth response
        setUserProfile(mockGoogleResponse.user);
        setIsAuthenticated(true);
        setShowAuth(false);
        setShowFeatures(true); // Show features selection screen after auth
      } catch (error) {
        Alert.alert("Authentication Failed", "Could not sign in with Google");
        console.error("Google auth error:", error);
      }
    }
  };

  // Skip authentication
  const handleSkipAuth = () => {
    setShowAuth(false);
    setShowFeatures(true); // Show features selection even when skipping auth
  };

  // Handle feature selection
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
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
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
      ]
    );
  };

  // Request permissions for camera and media library
  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      const libraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraPermission.status !== 'granted' || libraryPermission.status !== 'granted') {
        Alert.alert('Permission needed', 'Camera and media library permissions are required to use this app');
        return false;
      }
      return true;
    }
    return true;
  };

  const takePhoto = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      saveToPhotos: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages([...images, ...result.assets]);
    }
  };

  // Handle selecting images from gallery
  const pickImages = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages([...images, ...result.assets]);
    }
  };

  // Handle generating PDF from images (placeholder for backend request)
  const generatePDF = () => {
    if (images.length === 0) {
      Alert.alert('No images', 'Please select at least one image to generate a PDF');
      return;
    }

    Alert.alert(
      'Process Images',
      `Ready to process ${images.length} images through the backend AI service`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => {
            Alert.alert('Success', 'Images would be sent to backend for processing');
          }
        }
      ]
    );
  };

  // Remove an image from the selection
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // Initial loading screen
  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />
        <Text style={styles.splashLogo}>Aora</Text>
        <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
        <Text style={styles.splashTagline}>Transform your photos with AI</Text>
      </View>
    );
  }

  // Show authentication screen
  if (showAuth) {
    return (
      <AuthScreen
        onAuthenticate={handleAuthenticate}
        onSkip={handleSkipAuth}
      />
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
  // Currently only implementing Image-to-Text (OCR)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4a90e2" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToFeatures}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentFeature === 'ocr' ? 'Image to Text' :
            currentFeature === 'rephrase' ? 'Rephrase Text' :
              currentFeature === 'ielts' ? 'IELTS Assistant' :
                currentFeature === 'multi-query' ? 'Multi-Model Query' :
                  currentFeature === 'youtube' ? 'YouTube Summarizer' : 'Aora'}
        </Text>
        {isAuthenticated && userProfile && (
          <TouchableOpacity style={styles.profileButton} onPress={handleSignOut}>
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

      {/* Feature-specific content (currently only showing OCR) */}
      {currentFeature === 'ocr' && (
        <>
          {images.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="document-text" size={80} color="#ddd" style={styles.emptyIcon} />
              <Text style={styles.emptyText}>No images selected</Text>
              <Text style={styles.instructionText}>
                Take a photo or select from gallery to extract text
              </Text>
            </View>
          ) : (
            <ScrollView style={styles.imageScrollView}>
              <View style={styles.imageGrid}>
                {images.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image.uri }} style={styles.image} />
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeImage(index)}
                    >
                      <Ionicons name="close-circle" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Ionicons name="camera" size={24} color="white" />
              <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pickImages}>
              <Ionicons name="images" size={24} color="white" />
              <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>
          </View>

          {images.length > 0 && (
            <TouchableOpacity style={styles.actionButton} onPress={generatePDF}>
              <Text style={styles.actionButtonText}>Extract Text</Text>
            </TouchableOpacity>
          )}
        </>
      )}

      {/* Placeholder for other features */}
      {currentFeature !== 'ocr' && (
        <View style={styles.placeholderContainer}>
          <Ionicons
            name={
              currentFeature === 'rephrase' ? 'create' :
                currentFeature === 'ielts' ? 'school' :
                  currentFeature === 'multi-query' ? 'chatbubbles' :
                    currentFeature === 'youtube' ? 'logo-youtube' : 'apps'
            }
            size={80}
            color="#4a90e2"
          />
          <Text style={styles.placeholderTitle}>
            {currentFeature === 'rephrase' ? 'Text Rephrasing & Correction' :
              currentFeature === 'ielts' ? 'IELTS Assistance' :
                currentFeature === 'multi-query' ? 'Multi-Model Querying' :
                  currentFeature === 'youtube' ? 'YouTube Summarizer' : 'Feature'}
          </Text>
          <Text style={styles.placeholderText}>
            This feature is coming soon
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Splash screen styles
  splashContainer: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
  splashTagline: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },

  // Main app styles
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  imageScrollView: {
    flex: 1,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  imageContainer: {
    width: '33.33%',
    padding: 5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  actionButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Placeholder styles for unimplemented features
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