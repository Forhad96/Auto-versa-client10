import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    // create user with email and pass
    const createUser = (email,password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

// update profile
const updateUserProfile = (name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })

}

// sing in user
const singInWithEmail=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(email,password)
}
    

    const authInfo = {
      user,
      loading,
      createUser,
      updateUserProfile,
      singInWithEmail,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;