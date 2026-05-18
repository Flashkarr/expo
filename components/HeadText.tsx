import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  name: string;
  color: string;
};

export default function HeadText({ name, color }: Props) {
  return (
    <Text style={[styles.text, { color }]}>
      {name}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});