import React from "react";
import { Text } from "react-native";

type Props = {
  title: string;
  color: string;
};

export default function ThemeText({ title, color }: Props) {
  return (
    <Text style={{ color: color, fontSize: 28, marginBottom: 20 }}>
      {title}
    </Text>
  );
}