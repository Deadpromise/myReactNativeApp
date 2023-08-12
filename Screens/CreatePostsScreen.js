import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import {
  AntDesign,
  Octicons,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Forest from "../images/forest.jpg";

const CreatePostsScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [photoName, setPhotoName] = useState("");
  const [photoGeo, setPhotoGeo] = useState("");
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  const photoCameraColor = isPhotoLoaded ? "#FFF" : "rgba(189, 189, 189, 1)";
  const circleColor = isPhotoLoaded
    ? "rgba(255, 255, 255, 0.3)"
    : "rgba(255, 255, 255, 1)";
  const addPhotoTextValue = isPhotoLoaded
    ? "Редагувати фото"
    : "Завантажте фото";

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.pushBottomWrapper}>
        <View style={styles.postsScreenContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsPhotoLoaded(true);
            }}
          >
            <View style={styles.emptyPhotoBox}>
              <MaterialIcons
                style={styles.photoCameraIcon}
                name="photo-camera"
                size={24}
                color={photoCameraColor}
              />
              <FontAwesome
                style={styles.photoCircle}
                name="circle"
                size={60}
                color={circleColor}
              />
              {isPhotoLoaded && (
                <Image source={Forest} style={styles.postsPhoto}></Image>
              )}
            </View>
          </TouchableOpacity>

          <Text style={styles.addPhotoText}>{addPhotoTextValue}</Text>
          <KeyboardAvoidingView
            style={{ alignSelf: "flex-start", width: "100%" }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.photoNameInput}
              placeholder="Назва..."
              placeholderTextColor="rgba(189, 189, 189, 1)"
              onChangeText={setPhotoName}
              value={photoName}
            ></TextInput>
          </KeyboardAvoidingView>
          <View style={styles.geoInputContainer}>
            <Feather
              style={styles.geoInputIcon}
              name="map-pin"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
            <KeyboardAvoidingView
              style={{ width: "100%" }}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.photoGeoInput}
                placeholder="Місцевість..."
                placeholderTextColor="rgba(189, 189, 189, 1)"
                onChangeText={setPhotoGeo}
                value={photoGeo}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
          <Button
            title="Опублікувати"
            buttonStyle={[styles.mainButton, styles.publishButton]}
            titleStyle={styles.mainButtonText}
            containerStyle={[
              styles.mainButtonContainer,
              styles.publishButtonContainer,
            ]}
            disabled={!isPhotoLoaded}
            onPress={() => {
              console.log("publish");
            }}
          ></Button>
        </View>
        <TouchableOpacity
          style={styles.pushBottomElement}
          onPress={() => {
            console.log("pressed delete");
            setIsPhotoLoaded(false);
          }}
        >
          <Feather
            style={{ marginBottom: 42 }}
            name="trash-2"
            size={24}
            color="rgba(189, 189, 189, 1)"
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
