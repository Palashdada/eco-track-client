import React, { useState } from "react";
import { AuthContext } from "../AuthContex";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const googlesingIn = () => {
    signInWithPopup(auth, provider);
  };
  const singInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const value = {
    googlesingIn,
    setUser,
    user,
    signInWithEmailAndPassword,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
