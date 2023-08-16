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
} from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Forest from "../images/forest.jpg";
import UserPhoto from "../images/photo-example.jpg";

const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [isFocused1, setIsFocused1] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <View style={styles.pushBottomWrapper}> */}

      <View style={styles.commentsScreenContainer}>
        <ScrollView style={{ width: 343 }}>
          <Image source={Forest} style={styles.postsPhoto}></Image>
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
          </View>
        </ScrollView>
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
            onPress={() => {
              console.log("pressen send comm");
            }}
          >
            <FontAwesome5
              name="arrow-circle-up"
              size={34}
              color="rgba(255, 108, 0, 1)"
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        {/* <View style={styles.pushBottomElement}> */}
        {/* <View style={styles.commentInputContainer}> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
