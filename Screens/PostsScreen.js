import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/auth/selectors";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { getAllPosts, getDataFromFirestore } from "../redux/posts/operations";
import styles from "./styles";

import { FontAwesome, Feather } from "@expo/vector-icons";
import UserPhoto from "../images/photo-example.jpg";
import Forest from "../images/forest.jpg";

const PostsScreen = ({ navigation }) => {
  const testLocation = { latitude: 37.4219983, longitude: -122.084 };
  const user = useSelector(getUser);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in
      try {
        const postsData = await getAllPosts();
        console.log("Posts data:", postsData);
      } catch (error) {
        console.error("Error fetching posts data:", error);
      }
      console.log("User is signed in:");
    } else {
      console.log("User is signed out");
      navigation.navigate("Login");
    }
  });

  return (
    <View style={styles.postsScreenContainer}>
      <ScrollView style={{ width: 343 }}>
        <View style={styles.userPostsContainer}>
          <Image source={UserPhoto} style={styles.postsUserPhoto}></Image>
          <View>
            <Text style={styles.userPostsName}>{user.name}</Text>
            <Text style={styles.userPostsEmail}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.postsCard}>
          <Image source={Forest} style={styles.postsPhoto}></Image>
          <Text style={styles.cardHead}>Ліс</Text>
          <View style={styles.cardBottomBlock}>
            <View style={styles.cardCommentsBlock}>
              <TouchableOpacity
                onPress={() => {
                  console.log("press comm");
                  navigation.navigate("Comments");
                }}
              >
                <FontAwesome
                  name="comment-o"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
              </TouchableOpacity>
              <Text style={styles.cardCommentsQty}>0</Text>
            </View>
            <View style={styles.cardCommentsBlock}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Map", { testLocation });
                }}
              >
                <Feather
                  name="map-pin"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
              </TouchableOpacity>
              <Text style={styles.cardGeoText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.postsCard}>
          <Image source={Forest} style={styles.postsPhoto}></Image>
          <Text style={styles.cardHead}>Ліс</Text>
          <View style={styles.cardBottomBlock}>
            <View style={styles.cardCommentsBlock}>
              <FontAwesome
                name="comment-o"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
              <Text style={styles.cardCommentsQty}>0</Text>
            </View>
            <View style={styles.cardCommentsBlock}>
              <TouchableOpacity
                onPress={() => {
                  console.log("press map");
                  navigation.navigate("Map", { testLocation });
                }}
              >
                <Feather
                  name="map-pin"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
              </TouchableOpacity>
              <Text style={styles.cardGeoText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
