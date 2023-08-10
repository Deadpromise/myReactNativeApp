import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Octicons, MaterialIcons } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen Screen</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("pressed back");
          navigation.goBack();
        }}
        style={{ marginLeft: 10 }}
      >
        <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePostsScreen;
