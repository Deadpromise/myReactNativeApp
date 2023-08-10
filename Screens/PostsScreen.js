import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import UserPhoto from "../images/photo-example.jpg";
import Forest from "../images/forest.jpg";

const PostsScreen = () => {
  return (
    <View style={styles.postsScreenContainer}>
      <ScrollView>
        <View style={styles.userPostsContainer}>
          <Image source={UserPhoto} style={styles.postsUserPhoto}></Image>
          <View>
            <Text style={styles.userPostsName}>Natali Romanova</Text>
            <Text style={styles.userPostsEmail}>email@example.com</Text>
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
              <Feather
                name="map-pin"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
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
              <Feather
                name="map-pin"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
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
