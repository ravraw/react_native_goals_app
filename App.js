import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";

export default function App() {
  const onTextChange = (value) => {
    console.log(value);
  };
  const addGoalHandler = () => {
    console.log("Add goal button pressed!");
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new goal!"
          onChangeText={onTextChange}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals....</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  listContainer: {
    flex: 4,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    height: 40,
    borderColor: "gray",
  },
  button: {},
});
