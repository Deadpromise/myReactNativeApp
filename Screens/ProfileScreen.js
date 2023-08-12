import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import styles from "./styles";
import AddPhoto from "../images/white-bg.jpg";
import UserPhoto from "../images/photo-example.jpg";
import Forest from "../images/forest.jpg";

const bgImage = require("../images/Phot-BG.png");

const ProfileScreen = ({ navigation }) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(true);
  const photoSrc = isPhotoLoaded ? UserPhoto : AddPhoto;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImage} style={styles.bgContainer}>
        <View style={styles.pushBottomWrapper}>
          <View style={styles.pushTopElement}>
            <View style={styles.profileContainer}>
              <View style={styles.photoContainer}>
                <Image source={photoSrc} style={styles.photo}></Image>
                {!isPhotoLoaded ? (
                  <TouchableOpacity
                    onPress={() => {
                      setIsPhotoLoaded(true);
                    }}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={25}
                      color="#FF6C00"
                      style={styles.photoIcon}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setIsPhotoLoaded(false);
                    }}
                  >
                    <AntDesign
                      name="closecircleo"
                      size={25}
                      color="#E8E8E8"
                      backgroundColor="white"
                      style={styles.photoIcon}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.profilePostsContainer}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("pressed logout");
                    navigation.navigate("Login");
                  }}
                  style={{ position: "absolute", top: 22, right: 16 }}
                >
                  <MaterialIcons
                    name="logout"
                    size={24}
                    color="rgba(189, 189, 189, 1)"
                  />
                </TouchableOpacity>
                <Text style={styles.profileNameText}>Natali Romanova</Text>
                <ScrollView>
                  <View style={styles.postsCard}>
                    <Image source={Forest} style={styles.postsPhoto}></Image>
                    <Text style={styles.cardHead}>Ліс</Text>
                    <View style={styles.cardBottomBlock}>
                      <View style={styles.cardBottomAddBlock}>
                        <View style={styles.cardCommentsBlock}>
                          <FontAwesome
                            name="comment-o"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            8
                          </Text>
                        </View>
                        <View style={styles.cardCommentsBlock}>
                          <AntDesign
                            style={{ marginLeft: 24 }}
                            name="like2"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            153
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardCommentsBlock}>
                        <Feather
                          name="map-pin"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                        <Text style={styles.cardGeoText}>Ukraine</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.postsCard}>
                    <Image source={Forest} style={styles.postsPhoto}></Image>
                    <Text style={styles.cardHead}>Ліс</Text>
                    <View style={styles.cardBottomBlock}>
                      <View style={styles.cardBottomAddBlock}>
                        <View style={styles.cardCommentsBlock}>
                          <FontAwesome
                            name="comment-o"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            8
                          </Text>
                        </View>
                        <View style={styles.cardCommentsBlock}>
                          <AntDesign
                            style={{ marginLeft: 24 }}
                            name="like2"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            153
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardCommentsBlock}>
                        <Feather
                          name="map-pin"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                        <Text style={styles.cardGeoText}>Ukraine</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.postsCard}>
                    <Image source={Forest} style={styles.postsPhoto}></Image>
                    <Text style={styles.cardHead}>Ліс</Text>
                    <View style={styles.cardBottomBlock}>
                      <View style={styles.cardBottomAddBlock}>
                        <View style={styles.cardCommentsBlock}>
                          <FontAwesome
                            name="comment-o"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            8
                          </Text>
                        </View>
                        <View style={styles.cardCommentsBlock}>
                          <AntDesign
                            style={{ marginLeft: 24 }}
                            name="like2"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={[
                              styles.cardCommentsQty,
                              styles.cardCommentsQtyActive,
                            ]}
                          >
                            153
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardCommentsBlock}>
                        <Feather
                          name="map-pin"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                        <Text style={styles.cardGeoText}>Ukraine</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
