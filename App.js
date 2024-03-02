import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const textInputHandler = (updatedText) => {
    setEnteredGoal(updatedText);
  };
  const addGoalHandler = () => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
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
        <FlatList
          data={goalList}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 10,
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  listContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "stretch",
    margin: 10,
    // borderWidth: 1,
    // borderColor: "red",
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
