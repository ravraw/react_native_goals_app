import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const textInputHandler = (updatedText) => {
    setEnteredGoal(updatedText);
  };
  const addGoalHandler = () => {
    setGoalList((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Add a new goal!"
          onChangeText={textInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>{goalList}</Text>
      </View>
    </SafeAreaView>
  );
};

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

export default App;
