import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteGoal }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#ee6002",
    borderRadius: 6,
    borderColor: "black",
  },
  pressedItem: {
    backgroundColor: "#ff8c00",
  },
});

export default GoalItem;
