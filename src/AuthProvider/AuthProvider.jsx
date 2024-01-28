import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const providerGoogle = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlePopupLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNamePhoto = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (getUser) => {
      console.log("Im spying on ", getUser);
      setUser(getUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const AuthHere = {
    user,
    googlePopupLogin,
    createUser,
    updateNamePhoto,
    loginUser,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={AuthHere}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
