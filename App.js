import { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [goalList, setGoalList] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);

  const textInputHandler = (updatedText) => {
    setEnteredGoal(updatedText);
  };
  const addGoalHandler = (newGoal) => {
    setGoalList((goalList) => [
      ...goalList,
      { text: newGoal, id: Math.random().toString() },
    ]);
  };

  const showAddGoalModel = () => {
    setModelVisible(true);
  };

  const closeAddGoalModel = () => {
    setModelVisible(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoalList((goalList) => {
      return goalList.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <Button title="Add New Goal" onPress={showAddGoalModel} />
      <GoalInput
        modelVisible={modelVisible}
        addGoalHandler={addGoalHandler}
        deleteGoalHandler={deleteGoalHandler}
        closeAddGoalModel={closeAddGoalModel}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteGoal={deleteGoalHandler}
            />
          )}
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
    marginTop: 50,
  },
  listContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "stretch",
    margin: 10,
  },
});

export default App;
