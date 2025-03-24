import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>This is a text container</Text>

      <Image
        style={{ width: 200, height: 300 }}
        source={{ uri: "https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      />

      <TouchableOpacity style={{ padding: 10, backgroundColor: "orchid" }} onPress={() => Alert.alert("Button pressed")}>
        <Text>
          Press
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
