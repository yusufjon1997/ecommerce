import React, {createContext, useState , useEffect } from 'react'
import { onAuthStateChangedListener , createUserDocument } from '../utils/firebase/Firebase'

//actual values you want to access
export const UserContext = createContext({
    setCurrentUser: () => null ,
    currentUser: null 
})

export const UserProvider = ({ children }) => {
    const [currentUser , setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
      const unsbscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocument(user);
        }
        setCurrentUser(user);
      })  

      return unsbscribe;

    }, [])


    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}