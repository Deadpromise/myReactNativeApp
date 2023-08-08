import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Octicons, MaterialIcons } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

{
  /* <AntDesign name="plus" size={24} color="black" />;

<AntDesign name="user" size={24} color="black" />;

<Octicons name="apps" size={24} color="black" />; */
}

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "CreatePosts") {
            return <AntDesign name="pluscircle" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <AntDesign name="user" size={size} color={color} />;
          } else if (route.name === "Posts") {
            return <Octicons name="apps" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "flex",
        },
        headerTitleAlign: "center",
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("pressed logout");
              }}
              style={{ marginRight: 10 }}
            >
              <MaterialIcons
                name="logout"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
