import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const CommentsScreen = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 1" },
    { id: 4, text: "Comment 2" },
    { id: 5, text: "Comment 1" },
    { id: 6, text: "Comment 2" },
    { id: 7, text: "Comment 1" },
    { id: 8, text: "Comment 2" },
    { id: 9, text: "Comment 1" },
    { id: 10, text: "Comment 2" },
    { id: 11, text: "Comment 1" },
    { id: 12, text: "Comment 2" },
    { id: 13, text: "Comment 1" },
    { id: 14, text: "Comment 2" },
    { id: 15, text: "Comment 1" },
    { id: 16, text: "Comment 2" },
    { id: 17, text: "Comment 1" },
    { id: 18, text: "Comment 2" },
    { id: 19, text: "Comment 1" },
    { id: 20, text: "Comment 2" },
    { id: 21, text: "Comment 2" },
    { id: 22, text: "Comment 2" },
    { id: 23, text: "Comment 2" },
    // ... other comments
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.commentsContainer}>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.comment}>
            <Text>{comment.text}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <Button title="Send" onPress={handleAddComment} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  commentsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 100, // Space for input container
  },
  comment: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default CommentsScreen;
