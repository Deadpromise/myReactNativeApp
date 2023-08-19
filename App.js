import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import MapScreen from "./Screens/MapScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import styles from "./Screens/styles";

import testscreen from "./Screens/testscreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    // 400
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    // 500
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    // 700
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            ></MainStack.Screen>
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            ></MainStack.Screen>
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            ></MainStack.Screen>
            <MainStack.Screen
              name="Map"
              component={MapScreen}
              options={{
                title: "Мапа",
                headerTitleStyle: styles.screenHeader,
                headerStyle: styles.headerContainer,
              }}
            ></MainStack.Screen>
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              // component={testscreen}
              options={{
                title: "Коментарі",
                headerTitleStyle: styles.screenHeader,
                headerStyle: styles.headerContainer,
                headerTitleAlign: "center",
              }}
            ></MainStack.Screen>
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
//  <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!!</Text>
//       <StatusBar style="auto" />
//     </View>
