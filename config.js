// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXSS6oyLyPW_fWY1Uqu00DgUoXyJ-cktw",
  authDomain: "myreactnativeapp-396018.firebaseapp.com",
  projectId: "myreactnativeapp-396018",
  storageBucket: "myreactnativeapp-396018.appspot.com",
  messagingSenderId: "336492900788",
  appId: "1:336492900788:web:61a188350eeb0e77d302e1",
  measurementId: "G-CER7YDQBCZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
