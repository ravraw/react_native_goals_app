import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" />
          <Button title="ADD" />
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
