import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/auth/selectors";
import { getItems, getIsPostsLoading } from "../redux/posts/selectors";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { getAllPosts, getDataFromFirestore } from "../redux/posts/operations";
import styles from "./styles";

import { FontAwesome, Feather } from "@expo/vector-icons";
import UserPhoto from "../images/photo-example.jpg";
import Forest from "../images/forest.jpg";

const PostsScreen = ({ navigation }) => {
  const user = useSelector(getUser);
  const items = useSelector(getItems);
  const isPostsLoading = useSelector(getIsPostsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          dispatch(getAllPosts());
        } catch (error) {
          console.error("Error fetching posts data:", error);
        }
        console.log("User is signed in:");
      } else {
        console.log("User is signed out");
        navigation.navigate("Login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({ item }) => {
    const { photoTitle, photoUrl, comments, likedBy, ownerId } = item.data;
    const { locationName, locationCoords } = item.data.photoLocation;
    // : { latitude, longitude }
    const { id } = item;
    console.log(id);
    console.log(photoTitle);
    console.log(ownerId);
    console.log(comments);
    console.log(likedBy);
    console.log(photoUrl);
    console.log(locationName);
    console.log(locationCoords);
    // console.log(longitude);

    const commetnsQty = comments.length;
    return (
      <View style={styles.postsCard}>
        <Image source={{ uri: photoUrl }} style={styles.postsPhoto} />
        <Text style={styles.cardHead}>{photoTitle}</Text>
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
            <Text style={styles.cardCommentsQty}>{commetnsQty}</Text>
          </View>
          <View style={styles.cardCommentsBlock}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Map", { locationCoords });
              }}
            >
              <Feather
                name="map-pin"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
            </TouchableOpacity>
            <Text style={styles.cardGeoText}>{locationName}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.postsScreenContainer}>
      <View style={{ width: "100%", paddingBottom: 50, paddingTop: 32 }}>
        <View style={styles.userPostsContainer}>
          <Image source={UserPhoto} style={styles.postsUserPhoto} />
          <View>
            <Text style={styles.userPostsName}>{user.name}</Text>
            <Text style={styles.userPostsEmail}>{user.email}</Text>
          </View>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default PostsScreen;
