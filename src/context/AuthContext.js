import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../firebase-config";
import React, {useState} from 'react';
import {doc, getDoc,setDoc} from 'firebase/firestore';


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

   
    const [userRecord, setRecord] = useState(JSON.parse(localStorage.getItem('userRecord')));


//add user to local storage
    function addUserLocally(userData) {
            //add userid to user data
            userData.id = auth.currentUser.uid
            localStorage.setItem("userRecord", JSON.stringify(userData));
            setRecord(userData)
            console.log(userRecord)
    }

    //This creates a new user in the database if the user doesn't already exist
    //otherwise we fetch the user's data from the database
    async function createUser() {
        //assign the current user to a variable
        let currentUser = auth.currentUser;

        //if there is no current user, return dont do anything
        if (!currentUser) return;
    
        //creating a reference to the user's document in the database
        const userRef = doc(db,'users',currentUser.uid)
        //getting the user's document from the database
        const snapshot = await getDoc(userRef)
    
        //if the user exists in the database
        //we add the user's data to local storage
        if (snapshot.exists()) {
            addUserLocally(snapshot.data())
        } 

        //if the user doesn't exist in the database
        else {
        // create a new user
            try {
                //creating a new user object
                const localUser = {
                    name: currentUser.displayName,
                    admin: false,
                    photo: currentUser.photoURL,
                }

                // creates a new user with the user's uid as the doc id
                await setDoc(userRef,  {...localUser})
                //console log the name of the user that was created
                console.log(currentUser.displayName + " created")
                
                //add user to local storage
                addUserLocally({...localUser})
                 
            }
            //if there is an error, log the error
            catch (error) {
                console.log(error.message)
            }
        }
    }

    async function GoogleSignIn() {

        const provider = new GoogleAuthProvider();
       
        await signInWithPopup(auth, provider)
        .then(result => {
            // on success, try create a new user
            createUser()
        })

        .catch((error) => {
            console.log(error);
            return false;
        });
        return true;
    }

    async function Logout() {
        await signOut(auth).then(() => {
            console.log("Signed Out");
            localStorage.removeItem("userRecord");  
            setRecord(null)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <AuthContext.Provider value={{ GoogleSignIn,userRecord,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}