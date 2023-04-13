import { useContext, createContext } from "react";
import {  signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import React, {useState} from 'react';
import {doc, getDoc,setDoc} from 'firebase/firestore';



const AuthContext = createContext()

// this is where we declare the functions that will be used in the AuthContext file
export const AuthContextProvider = ({children}) => {

   // this is a useState hook that allows us to store the user's data in local storage
    const [userRecord, setRecord] = useState(JSON.parse(localStorage.getItem('userRecord')));


//this is a function that adds the user's data to local storage
    function addUserLocally(userData) {
            //add userid to user data
            userData.id = auth.currentUser.uid
            localStorage.setItem("userRecord", JSON.stringify(userData));
            setRecord(userData)
            console.log(userRecord)
    }


    //This creates a new user in the database if the user doesn't already exist
    //otherwise we fetch the user's data from the database
    async function createUser(username) {
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
                    // if the user didn't provide a username, use their display name
                    name: {username} ? username : currentUser.displayName,
                    admin: false,
                    photo: currentUser.photoURL,
                }

                // creates a new user with the user's uid as the doc id
                await setDoc(userRef,  {...localUser})
                //console log the name of the user that was created
                console.log(currentUser.displayName + "created")
                
                //add user to local storage
                addUserLocally({...localUser})
                 
            }
            //if there is an error, log the error
            catch (error) {
                console.log(error.message)
            }
        }
    }

// here are the steps for registering a user with email username and password
async function emailRegisteration(email,username,password){
    
    // here we decalre a 
  let success = false;
  // then we call the createUserWithEmailAndPassword function from firebase 
    await createUserWithEmailAndPassword(auth, email, password)
    // if the user was created successfully, we call the createUser function
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        success = true;
        // ...
        console.log(user)
       
        createUser(username)
    })
    .catch((error) => {
       console.log(error)
        // ..
    });
    // return the success variable so we can check if the user was created
    return success;
}
// this function is responsible for logging in a user
async function emailLogin(email,password){

    let success = false;
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
       
        success = true;
        
        // then we call the createUser function to add the user to the database
        createUser(null)
    })
    .catch((error) => {
        
   console.log(error)
    });
    return success;
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
        <AuthContext.Provider value={{ userRecord,Logout,emailRegisteration, emailLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}