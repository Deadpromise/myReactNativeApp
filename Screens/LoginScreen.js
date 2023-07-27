import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <View>
        <Text>Увійти</Text>
        <TextInput
          styles={styles.input}
          placeholder="Адреса електронної пошти"
          onChangeText={setEmail}
          value={email}
        ></TextInput>
        <TextInput
          styles={styles.input}
          placeholder="Пароль"
          onChangeText={setPassword}
          value={password}
        ></TextInput>
        <Text>Показати</Text>
        <Button title="Увійти"></Button>
        <Text>
          Немає акаунту? <Text>Зареєструватися</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 40,
    // margin: 12,
    // padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default LoginScreen;
