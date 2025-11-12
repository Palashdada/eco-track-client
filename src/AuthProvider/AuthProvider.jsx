import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.config";
import Loding from "../Components/Loding";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [loding, setLoding] = useState(false);

  const googlesingIn = () => {
    return signInWithPopup(auth, provider);
  };
  const singInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (loding) {
    return <Loding></Loding>;
  }
  const value = {
    googlesingIn,
    setUser,
    user,
    singInWithEmail,
    createUser,
    auth,
    setLoding,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
