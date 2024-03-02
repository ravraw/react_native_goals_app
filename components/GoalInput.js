import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, modelVisible, closeAddGoalModel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const textInputHandler = (updatedText) => {
    setEnteredGoal(updatedText);
  };

  const addGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
    closeAddGoalModel();
  };

  const cancelGoal = () => {
    setEnteredGoal("");
    closeAddGoalModel();
  };

  return (
    <Modal visible={modelVisible} animation="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
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
            <Button title="CANCEL" onPress={cancelGoal} />
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default GoalInput;
