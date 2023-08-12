import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "@rneui/themed";
import { useState } from "react";
import styles from "./styles";

const bgImage = require("../images/Phot-BG.png");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={bgImage} style={styles.bgContainer}>
          <View style={styles.pushBottomWrapper}>
            <View style={styles.pushBottomElement}>
              <View style={styles.secondaryContainer}>
                <View style={styles.formContainer}>
                  <Text style={[styles.mainHeader, styles.loginHeader]}>
                    Увійти
                  </Text>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      style={[styles.input, isFocused1 && styles.inputFocused]}
                      placeholder="Адреса електронної пошти"
                      placeholderTextColor="rgba(189, 189, 189, 1)"
                      onChangeText={setEmail}
                      value={email}
                      onFocus={handleFocus1}
                      onBlur={() => setIsFocused1(false)}
                    ></TextInput>
                  </KeyboardAvoidingView>
                  <View style={styles.passContainer}>
                    <KeyboardAvoidingView
                      style={{ width: "100%" }}
                      behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
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
                        secureTextEntry={!isPasswordVisible}
                        onFocus={handleFocus2}
                        onBlur={() => setIsFocused2(false)}
                      ></TextInput>
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                      style={styles.showPassContainer}
                      onPress={togglePasswordVisibility}
                    >
                      <Text style={styles.showPassText}>
                        {isPasswordVisible ? "Сховати" : "Показати"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Button
                    title="Увійти"
                    buttonStyle={styles.mainButton}
                    titleStyle={styles.mainButtonText}
                    containerStyle={styles.mainButtonContainer}
                    onPress={onLogin}
                  ></Button>
                  <TouchableOpacity
                    style={{ marginBottom: 100 }}
                    onPress={() => {
                      navigation.navigate("Registration");
                    }}
                  >
                    <Text style={styles.redirectText}>
                      Немає акаунту? Зареєструватися
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
