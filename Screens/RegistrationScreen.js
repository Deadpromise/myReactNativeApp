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
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import AddPhoto from "../images/white-bg.jpg";
import UserPhoto from "../images/photo-example.jpg";
import PlusIcon from "../images/add.svg";

const bgImage = require("../images/Phot-BG.png");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
    setIsFocused3(false);
  };

  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
    setIsFocused3(false);
  };

  const handleFocus3 = () => {
    setIsFocused1(false);
    setIsFocused2(false);
    setIsFocused3(true);
  };

  const photoSrc = isPhotoLoaded ? UserPhoto : AddPhoto;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImage} imageStyle={styles.bgContainer}>
        <View style={styles.secondaryContainer}>
          <View style={styles.photoContainer}>
            <Image source={photoSrc} style={styles.photo}></Image>
            {!isPhotoLoaded ? (
              <AntDesign
                name="pluscircleo"
                size={25}
                color="#FF6C00"
                style={styles.photoIcon}
              />
            ) : (
              <AntDesign
                name="closecircleo"
                size={25}
                color="#E8E8E8"
                backgroundColor="white"
                style={styles.photoIcon}
              />
            )}
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.mainHeader}>Реєстрація</Text>
            <TextInput
              style={[styles.input, isFocused1 && styles.inputFocused]}
              placeholder="Логін"
              placeholderTextColor="rgba(189, 189, 189, 1)"
              onChangeText={setLogin}
              value={login}
              onFocus={handleFocus1}
              onBlur={() => setIsFocused1(false)}
            ></TextInput>
            <TextInput
              style={[styles.input, isFocused2 && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="rgba(189, 189, 189, 1)"
              onChangeText={setEmail}
              value={email}
              onFocus={handleFocus2}
              onBlur={() => setIsFocused2(false)}
            ></TextInput>
            <View style={styles.passContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.lastInput,
                  isFocused3 && styles.inputFocused,
                ]}
                placeholder="Пароль"
                placeholderTextColor="rgba(189, 189, 189, 1)"
                onChangeText={setPassword}
                value={password}
                onFocus={handleFocus3}
                onBlur={() => setIsFocused3(false)}
              ></TextInput>
              <Text style={styles.showPass}>Показати</Text>
            </View>
            <Button
              title="Зареєстуватися"
              buttonStyle={styles.mainButton}
              titleStyle={styles.mainButtonText}
              containerStyle={styles.mainButtonContainer}
            ></Button>
            <Text style={styles.redirectText}>Вже є акаунт? Увійти</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
