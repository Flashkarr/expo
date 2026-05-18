import React from "react";
import { Button, StyleSheet, View } from "react-native";

import HeadText from "../../components/HeadText";
import TaskList from "../../components/TaskList";
import TemSwitcher from "../../components/TemSwitcher";

export default function App() {

  const [theme, changeTheme] = React.useState(false);

  const backgroundColor = theme ? "#000000" : "#ffffff";
  const textColor = theme ? "#ffffff" : "#000000";

  return (
    <View style={[styles.container, { backgroundColor }]}>

      {/* task1 */}
      <HeadText
        name="Welcome"
        color="red"
      />

      {/* task2 */}
      <TaskList
        task="Do homework"
        execut={false}
      />

      <TaskList
        task="Go to the gym"
        execut={true}
      />

      <TaskList
        task="Have fun"
        execut={true}
      />

      {/* task3 */}
      <TemSwitcher
        title="Dark Theme"
        color={textColor}
      />

      <Button
        title="Toggle Theme"
        onPress={() => changeTheme(!theme)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});