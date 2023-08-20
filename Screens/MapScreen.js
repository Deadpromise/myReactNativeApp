import { View, Image, Text, ScrollView, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import styles from "./styles";

const MapScreen = ({ route }) => {
  const [location, setLocation] = useState(null);
  const {
    params: { locationCoords },
  } = useRoute();

  useEffect(() => {
    setLocation(locationCoords);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     const coords = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     setLocation(coords);
  //   })();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        //   onRegionChange={() => console.log("Region change")}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;
