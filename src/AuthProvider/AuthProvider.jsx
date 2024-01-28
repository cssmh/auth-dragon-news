import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateNamePhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthHere = {createUser, updateNamePhoto, loginUser}
    return (
        <AuthContext.Provider value={AuthHere}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;