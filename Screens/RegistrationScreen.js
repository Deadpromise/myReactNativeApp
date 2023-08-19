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
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import AddPhoto from "../images/white-bg.jpg";
import UserPhoto from "../images/photo-example.jpg";

import { registerDB } from "../redux/auth/operations";

const bgImage = require("../images/Phot-BG.png");

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const dispatch = useDispatch();

  const onRegister = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);

    dispatch(registerDB(email, password));

    // navigation.navigate("Home");
  };

  const photoSrc = isPhotoLoaded ? UserPhoto : AddPhoto;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={bgImage} style={styles.bgContainer}>
          <View style={styles.pushBottomWrapper}>
            <View style={styles.pushBottomElement}>
              <View style={styles.secondaryContainer}>
                <View style={styles.photoContainer}>
                  <Image source={photoSrc} style={styles.photo}></Image>
                  {!isPhotoLoaded ? (
                    <TouchableOpacity
                      onPress={() => {
                        setIsPhotoLoaded(true);
                      }}
                    >
                      <AntDesign
                        name="pluscircleo"
                        size={25}
                        color="#FF6C00"
                        style={styles.photoIcon}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setIsPhotoLoaded(false);
                      }}
                    >
                      <AntDesign
                        name="closecircleo"
                        size={25}
                        color="#E8E8E8"
                        backgroundColor="white"
                        style={styles.photoIcon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.formContainer}>
                  <Text style={styles.mainHeader}>Реєстрація</Text>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      style={[styles.input, isFocused1 && styles.inputFocused]}
                      placeholder="Логін"
                      placeholderTextColor="rgba(189, 189, 189, 1)"
                      onChangeText={setLogin}
                      value={login}
                      onFocus={handleFocus1}
                      onBlur={() => setIsFocused1(false)}
                    ></TextInput>
                  </KeyboardAvoidingView>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      style={[styles.input, isFocused2 && styles.inputFocused]}
                      placeholder="Адреса електронної пошти"
                      placeholderTextColor="rgba(189, 189, 189, 1)"
                      onChangeText={setEmail}
                      value={email}
                      onFocus={handleFocus2}
                      onBlur={() => setIsFocused2(false)}
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
                          isFocused3 && styles.inputFocused,
                        ]}
                        placeholder="Пароль"
                        placeholderTextColor="rgba(189, 189, 189, 1)"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        onFocus={handleFocus3}
                        onBlur={() => setIsFocused3(false)}
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
                    title="Зареєстуватися"
                    buttonStyle={styles.mainButton}
                    titleStyle={styles.mainButtonText}
                    containerStyle={styles.mainButtonContainer}
                    onPress={onRegister}
                  ></Button>
                  <TouchableOpacity
                    style={{ marginBottom: 100 }}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    <Text style={styles.redirectText}>
                      Вже є акаунт? Увійти
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

export default RegistrationScreen;
