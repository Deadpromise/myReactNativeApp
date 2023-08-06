import { View, Text, TextInput, Image, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useState } from "react";
import styles from "./styles";

const bgImage = require("../images/Phot-BG.png");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
  };

  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImage} imageStyle={styles.bgContainer}>
        <View style={styles.secondaryContainer}>
          <View style={styles.formContainer}>
            <Text style={[styles.mainHeader, styles.loginHeader]}>Увійти</Text>
            <TextInput
              style={[styles.input, isFocused1 && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="rgba(189, 189, 189, 1)"
              onChangeText={setEmail}
              value={email}
              onFocus={handleFocus1}
              onBlur={() => setIsFocused1(false)}
            ></TextInput>
            <View style={styles.passContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.lastInput,
                  isFocused2 && styles.inputFocused,
                ]}
                placeholder="Пароль"
                placeholderTextColor="rgba(189, 189, 189, 1)"
                onChangeText={setPassword}
                value={password}
                onFocus={handleFocus2}
                onBlur={() => setIsFocused2(false)}
              ></TextInput>
              <Text style={styles.showPass}>Показати</Text>
            </View>
            <Button
              title="Увійти"
              buttonStyle={styles.mainButton}
              titleStyle={styles.mainButtonText}
              containerStyle={styles.mainButtonContainer}
            ></Button>
            <Text style={styles.redirectText}>
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
