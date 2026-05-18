import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  task: string;
  execut: boolean;
};

const TaskList = ({ task, execut }: Props) => {
  return (
    <View style={styles.card}>

      <Text style={styles.task}>
        Task: {task}
      </Text>

      <Text
        style={{
          color: execut ? "green" : "red",
          fontSize: 18,
        }}
      >
        {execut ? "Done" : "Not done"}
      </Text>

    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
  },

  task: {
    fontSize: 20,
    marginBottom: 10,
  },
});