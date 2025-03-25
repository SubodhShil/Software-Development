import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, SafeAreaView, useColorScheme } from 'react-native';

export default function App() {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  console.log(theme);

  const backgroundColor = isDarkMode ? "white" : "white";
  const textColor = isDarkMode ? "white" : "black";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>This is a text container</Text>

      <Image
        style={{ width: 200, height: 300 }}
        source={{ uri: "https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>
          Press
        </Text>
      </TouchableOpacity>

      <Pressable style={{ padding: 10, backgroundColor: "yellow" }} onPress={() => Alert.alert("Button pressed")}>
        <Text>Do something</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: 500
  },
  button: {
    padding: 10,
    width: 100,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",

  },
  btnText: { color: 'white', alignItems: 'center' },
});
