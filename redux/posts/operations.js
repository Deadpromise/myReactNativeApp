import { createAsyncThunk } from "@reduxjs/toolkit";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db, storage } from "../../config";

export const uriToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      // return the blob
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new Error("uriToBlob failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);

    xhr.send(null);
  });
};

export const uploadImage = async (photoSrc, photoName) => {
  console.log("photosrc", photoSrc);
  const storageRef = ref(storage, `images/${photoName}`);

  try {
    const blob = await uriToBlob(photoSrc);
    const snapshot = await uploadBytes(storageRef, blob);

    // console.log("snapshot", snapshot);

    const url = await getDownloadURL(storageRef);
    // console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const writeDataToFirestore = async (
  photoSrc,
  photoFileName,
  photoTitle,
  locationName,
  locationCoords,
  currenUserId
) => {
  try {
    const photoFirebaseUrl = await uploadImage(photoSrc, photoFileName);
    console.log("writurl", photoFirebaseUrl);

    const docRef = await addDoc(collection(db, "posts"), {
      photoUrl: photoFirebaseUrl,
      photoTitle,
      photoLocation: { locationName, locationCoords },
      comments: [
        // {
        //   commentText: "grrrr",
        //   commentDate: "01.07.2023",
        //   commentOwnerId: "fghfg",
        // },
        // {
        //   commentText: "brrrr",
        //   commentDate: "10.07.2023",
        //   commentOwnerId: "htjtyj",
        // },
      ],
      likedBy: [],
      ownerId: currenUserId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    // querySnapshot.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return postsData;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (postId) => {
    try {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const updateComments = async (postId, newComment) => {
  try {
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, {
      comments: arrayUnion(newComment),
    });
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
