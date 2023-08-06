import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <RegistrationScreen></RegistrationScreen> */}
      <LoginScreen></LoginScreen>
    </>
  );
}
//  <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!!</Text>
//       <StatusBar style="auto" />
//     </View>
