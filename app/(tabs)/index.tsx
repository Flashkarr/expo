import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const colors = {
  background: "#f2f4f8",
  card: "#ffffff",
  text: "#222222",
  gray: "#666666",
  blue: "#2563eb",
};

const products = [
  { name: "Ноутбук", description: "Для навчання та роботи", price: "25000 грн" },
  { name: "Навушники", description: "Бездротові навушники", price: "1500 грн" },
  { name: "Мишка", description: "Ігрова мишка", price: "800 грн" },
];

export default function App() {
  return (
    <ScrollView style={styles.screen}>

      <Text style={styles.title}>завдання 1</Text>

      {products.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}

      <Text style={styles.title}>завдання 2</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Ім'я" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />

        <Button title="Зареєструватися" onPress={() => alert("форму відправлено")} />
      </View>

      <Text style={styles.title}>завдання 3</Text>

      <View style={styles.homeBlock}>
        <Text style={styles.homeTitle}>Головний екран</Text>
        <Text style={styles.text}>Ласкаво просимо</Text>
      </View>

      <View style={styles.profileBlock}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={styles.avatar}
        />

        <Text style={styles.profileName}>User Profile</Text>
        <Text style={styles.text}>Ім'я: Федір</Text>
        <Text style={styles.text}>Email: fedya@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.blue,
    marginTop: 25,
    marginBottom: 15,
  },

  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4,
  },

  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },

  description: {
    fontSize: 16,
    color: colors.gray,
    marginVertical: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },

  form: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },

  homeBlock: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  homeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  profileBlock: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },

  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
});