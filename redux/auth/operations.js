import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config";

export const registerDB = createAsyncThunk(
  "auth/registerDB",
  async ({ email, password }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
