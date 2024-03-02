import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, deleteGoalHandler, modelVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const textInputHandler = (updatedText) => {
    setEnteredGoal(updatedText);
  };

  const addGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const deleteGoal = () => {
    deleteGoalHandler("id");
    setEnteredGoal("");
  };

  return (
    <Modal visible={modelVisible} animation="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          style={styles.textInput}
          placeholder="Add a new goal!"
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="DELETE" onPress={addGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    height: 40,
    borderColor: "gray",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: 100,
  },
});

export default GoalInput;
