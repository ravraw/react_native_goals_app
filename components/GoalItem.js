import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text>{text}</Text>
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
});

export default GoalItem;
