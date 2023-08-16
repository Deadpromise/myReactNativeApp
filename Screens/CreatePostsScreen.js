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
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Forest from "../images/forest.jpg";

const CreatePostsScreen = ({ navigation, route }) => {
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
  const [capturedPhotoUri, setCapturedPhotoUri] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [location, setLocation] = useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setLocation(coords);
    console.log("Location set:", coords);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setCapturedPhotoUri(uri);
      setIsPhotoLoaded(true);
    }
  };

  const onDelete = () => {
    console.log("pressed delete");
    setIsPhotoLoaded(false);
    setCapturedPhotoUri("");
    setPhotoName("");
    setPhotoGeo("");
  };
  const onPublish = async () => {
    await getCurrentLocation();
    console.log("publish");
    onDelete();
    navigation.navigate("Posts");
  };

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
          {/* <TouchableOpacity
            onPress={() => {
              setIsPhotoLoaded(true);
            }}
          > */}
          <View style={styles.cameraContainer}>
            <Camera style={{}} type={type} ref={setCameraRef}>
              <View style={styles.emptyPhotoBox}>
                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={takePhoto}
                >
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
                </TouchableOpacity>
                {isPhotoLoaded && (
                  <Image
                    source={{ uri: capturedPhotoUri }}
                    style={styles.postsPhoto}
                  ></Image>
                )}
              </View>
            </Camera>
          </View>

          {/* </TouchableOpacity> */}

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
            onPress={onPublish}
          ></Button>
        </View>
        <TouchableOpacity style={styles.pushBottomElement} onPress={onDelete}>
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
