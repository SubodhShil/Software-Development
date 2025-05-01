import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const OCRFeature = ({ images, setImages, requestPermissions }) => {
    // Take a photo with camera: left side button
    const takePhoto = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            saveToPhotos: true
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImages([...images, ...result.assets]);
        }
    };

    // Handle selecting images from gallery: right side
    const pickImages = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImages([...images, ...result.assets]);
        }
    };

    // Remove an image from the selected images
    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    // extracting text from images logic is written here 👇🏽👇🏽
    return (
        <>
            {images.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons
                        name="document-text"
                        size={80}
                        color="#ddd"
                        style={styles.emptyIcon}
                    />
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
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Extract Text</Text>
                </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    emptyIcon: {
        marginBottom: 20
    },
    emptyText: {
        fontSize: 18,
        color: "#888",
        marginBottom: 10
    },
    instructionText: {
        fontSize: 14,
        color: "#888",
        textAlign: "center"
    },
    imageScrollView: {
        flex: 1
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
    },
    imageContainer: {
        width: "33.33%",
        padding: 5,
        position: "relative"
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 8
    },
    removeButton: {
        position: "absolute",
        right: 8,
        top: 8,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 12
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        paddingBottom: 30
    },
    button: {
        backgroundColor: "#4a90e2",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        marginLeft: 8
    },
    actionButton: {
        backgroundColor: "#2ecc71",
        padding: 15,
        alignItems: "center",
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 20
    },
    actionButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default OCRFeature;
