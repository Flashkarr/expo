import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  const [image, setImage] = useState(require('../../assets/images/avatar.png'));

  const changeImage = () => {
  setImage(require('../../assets/images/67.jpg'));
  };
  const handlePress = () => {
    const sum = Number(text1) + Number(text2);
    setResult(sum.toString());
  };

    const[count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Завдання 1</Text>

      <TextInput
        style={styles.input}
        placeholder="Перше число"
        value={text1}
        onChangeText={setText1}
      />

      <TextInput
        style={styles.input}
        placeholder="Друге число"
        value={text2}
        onChangeText={setText2}
      />

      <Button title="Натисни" onPress={handlePress} />

      <Text style={styles.text}>Результат: {result}</Text>




      <Text style={styles.text}>Завдання 2</Text>

      <Image source={image} style={styles.image} />

      <Button
        title="Натисни, щоб змінити картинку"
        onPress={changeImage}
      />




      <Text style={styles.text}>Завдання 3</Text>
      <Text>Лічильник: {count}</Text>
      <Button title="Додати +1" onPress={() =>setCount(count + 1)} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },

  text: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});