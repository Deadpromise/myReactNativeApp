import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import AddPhoto from "../images/add-photo.png";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Image source={AddPhoto} style={styles.photo}></Image>
      <Text>Реєстрація</Text>
      <TextInput
        styles={styles.input}
        placeholder="Логін"
        onChangeText={setLogin}
        value={login}
      ></TextInput>
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
      <Button title="Зареєстуватися"></Button>
      <Text>Вже є акаунт? Увійти</Text>
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
  photo: {
    width: 132,
    height: 120,
  },
});

export default RegistrationScreen;
