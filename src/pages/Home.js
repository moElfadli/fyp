import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// this is where we declare the functional component
const Signin = () => {
  // this is where we declare the variables we will use in the component
  const navigate = useNavigate();

  // this is a hook that allows us to use the functions in the AuthContext file
  const { GoogleSignIn, Logout, userRecord } = UserAuth();

  // asyn function is used to make the function asynchronous so that we can use the await keyword to wait for the promise to resolve
  async function SignOut(e) {
    // this prevents the page from reloading when the button is clicked
    e.preventDefault();
    await Logout()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // async function is used to make the function asynchronous so that we can use the await keyword to wait for the promise to resolve
  async function RegisterWithGoogle(e) {
    e.preventDefault();
    // this is where we call the GoogleSignIn function from the AuthContext file and wait for the promise to resolve
    await GoogleSignIn().then((result) => {
      if (result === true) {
        // this is where we check if the user is an admin and redirect them to the appropriate page
        if (userRecord.admin === true) {
          navigate("/ManageQuizzes")
        } else {
          navigate("/StudentHomepage");
        }
      } else {
        console.log("failed signin");
      }
    });
  }

  return (
    <div className="bg-indigo-400 w-full h-screen">
      <Navbar />
      <h1 className="page-title">Welcome to Online Quiz System</h1>

      <h1 className="sign-text">
        Sign in or Register
        <br />
        <br />
        <div className="flex flex-row item-center justify-evenly">
          <GoogleButton
            onClick={(e) => {
              RegisterWithGoogle(e);
            }}
          />

          <button className="btn">Sign in with Facebook</button>

          <button className="btn2">Sign in with Apple</button>
        </div>
        <button
          className="btn mt-6"
          onClick={(e) => {
            SignOut(e);
          }}
        >
          Logout
        </button>
      </h1>
    </div>
  );
};
export default Signin;
