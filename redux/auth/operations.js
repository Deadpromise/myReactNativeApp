import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config";

export const registerDB = createAsyncThunk(
  "auth/registerDB",
  async ({ email, password, login }, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: login });
      const data = {
        email: response._tokenResponse.email,
        name: response.user.displayName,
        token: response._tokenResponse.idToken,
      };
      return data;
    } catch (error) {
      console.log("thunkeErr", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginDB = createAsyncThunk(
  "auth/loginDB",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("login", response);
      //   return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutDB = createAsyncThunk(
  "auth/logoutDB",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      console.log("logged out is DONE!");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
