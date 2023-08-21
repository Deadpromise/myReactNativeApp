import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { getPostById, updateComments } from "../redux/posts/operations";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Forest from "../images/forest.jpg";
import UserPhoto from "../images/photo-example.jpg";
import { getCommentsData } from "../redux/posts/selectors";

const CommentsScreen = ({ navigation }) => {
  const [comment, setComment] = useState("");
  const [isFocused1, setIsFocused1] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const commentsData = useSelector(getCommentsData);
  const { comments, likedBy, ownerId, photoUrl } = commentsData;

  // const [postId, setPostId] = useState(null);

  const dispatch = useDispatch();

  const {
    params: { id },
  } = useRoute();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserId(user.uid);
        try {
          dispatch(getPostById(id));
        } catch (error) {
          console.error("Error fetching posts data:", error);
        }
        // console.log("User is signed in:");
      } else {
        // console.log("User is signed out");
        navigation.navigate("Login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   setPostId(id);
  // }, []);

  const handleFocus1 = () => {
    setIsFocused1(true);
  };
  const handleAddComment = async () => {
    const newComment = {
      commentDate: Date.now(),
      commentOwnerId: currentUserId,
      commentText: comment,
    };
    await updateComments(id, newComment);
    dispatch(getPostById(id));
    setComment("");
  };

  const renderItem = ({ item }) => {
    const { commentDate, commentOwnerId, commentText } = item;
    // console.log(commentDate);
    const date = new Date(commentDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("uk-UA", options).format(
      date
    );
    // console.log(formattedDate);

    const cardStyles =
      commentOwnerId === currentUserId
        ? [styles.commentsCardContainer, styles.commentsOwnerCardConatiner]
        : [styles.commentsCardContainer];
    const textContainerStyles =
      commentOwnerId === currentUserId
        ? [styles.commentsTextContainer, styles.commentsTextOwnerContainer]
        : [styles.commentsTextContainer];
    const textDateStyles =
      commentOwnerId === currentUserId
        ? [styles.commentsDateText, styles.commentsOwnerDateText]
        : [styles.commentsDateText];

    return (
      <View style={cardStyles}>
        <Image source={UserPhoto} style={styles.commentsAvatar}></Image>
        <View style={textContainerStyles}>
          <Text style={styles.commentsText}>{commentText}</Text>
          <Text style={textDateStyles}>{formattedDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.commentsScreenContainer}>
        <View>
          <Image
            source={{ uri: photoUrl }}
            style={styles.commentsPhoto}
          ></Image>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.commentDate}
            renderItem={renderItem}
          />
          {/* styles.postsPhoto */}
          {/* /<View
            style={[
              styles.commentsCardContainer,
              styles.commentsFirstCardContainer,
            ]}
          >
            <Image source={UserPhoto} style={styles.commentsAvatar}></Image>
            <View style={styles.commentsTextContainer}>
              <Text style={styles.commentsText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentsDateText}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.commentsCardContainer,
              styles.commentsOwnerCardConatiner,
            ]}
          >
            <Image source={UserPhoto} style={styles.commentsAvatar}></Image>
            <View
              style={[
                styles.commentsTextContainer,
                styles.commentsTextOwnerContainer,
              ]}
            >
              <Text style={styles.commentsText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text
                style={[styles.commentsDateText, styles.commentsOwnerDateText]}
              >
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.commentsCardContainer,
              styles.commentsFirstCardContainer,
            ]}
          >
            <Image source={UserPhoto} style={styles.commentsAvatar}></Image>
            <View style={styles.commentsTextContainer}>
              <Text style={styles.commentsText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentsDateText}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.commentsCardContainer,
              styles.commentsOwnerCardConatiner,
            ]}
          >
            <Image source={UserPhoto} style={styles.commentsAvatar}></Image>
            <View
              style={[
                styles.commentsTextContainer,
                styles.commentsTextOwnerContainer,
              ]}
            >
              <Text style={styles.commentsText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text
                style={[styles.commentsDateText, styles.commentsOwnerDateText]}
              >
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View> */}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.commentInputContainer}
        >
          <TextInput
            style={[styles.commentsInput, isFocused1 && styles.inputFocused]}
            placeholder="Коментувати..."
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={setComment}
            value={comment}
            onFocus={handleFocus1}
            onBlur={() => setIsFocused1(false)}
          ></TextInput>
          <TouchableOpacity
            style={styles.commentsSendIcon}
            onPress={handleAddComment}
          >
            <FontAwesome5
              name="arrow-circle-up"
              size={34}
              color="rgba(255, 108, 0, 1)"
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
