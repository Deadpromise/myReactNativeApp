import {
  View,
  Text,
  StyleSheet,
  TextInput,
  // Button,
  Image,
  ImageBackground,
  WebView,
} from "react-native";
import { Button } from "@rneui/themed";
import { useState } from "react";
import styles from "./styles";
import AddPhoto from "../images/add-photo.png";
import PlusIcon from "../images/add.svg";

const bgImage = require("../images/Phot-BG.png");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImage} imageStyle={styles.bgContainer}>
        <View style={styles.secondaryContainer}>
          <Image source={AddPhoto} style={styles.photo}></Image>
          <View style={styles.formContainer}>
            <Text style={styles.mainHeader}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#E8E8E8"
              onChangeText={setLogin}
              value={login}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#E8E8E8"
              onChangeText={setEmail}
              value={email}
            ></TextInput>
            <View style={styles.passContainer}>
              <TextInput
                style={[styles.input, styles.lastInput]}
                placeholder="Пароль"
                placeholderTextColor="#E8E8E8"
                onChangeText={setPassword}
                value={password}
              ></TextInput>
              <Text style={styles.showPass}>Показати</Text>
            </View>
            <Button
              title="Зареєстуватися"
              buttonStyle={styles.mainButton}
              titleStyle={styles.mainButtonText}
              containerStyle={styles.mainButtonContainer}
            ></Button>
            <Text>
              Вже є акаунт? <Text>Увійти</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
