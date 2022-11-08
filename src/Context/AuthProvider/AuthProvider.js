import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;