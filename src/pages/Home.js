import { async } from '@firebase/util';
import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';


// this is where we declare the functional component
const Signin = () => {
  // this is where we declare the variables we will use in the component
  const navigate = useNavigate();

  const { GoogleSignIn, Logout, userRecord } = UserAuth();

// asyn function is used to make the function asynchronous so that we can use the await keyword to wait for the promise to resolve
  async function SignOut(e){
    e.preventDefault();
    await Logout()
    .then(() => {
      console.log("Signed Out");
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  async function RegisterWithGoogle(e){
    e.preventDefault();
    await GoogleSignIn().then((result) => {
        if(result === true){

          if (userRecord.admin === true){
            navigate('/TeacherPage');
          }
          else{
            navigate('/StudentHome');
          }
        }
        else{
            // setAlertMessage(result);
            console.log("failed signin")
        }
        // setLoading(false);
    });
}

  

  return (

    <div>


      <h1 className='page-title'>Welcome to Online Quiz System</h1>
   
        
      <h1 className='sign-text' >Sign in or Register
        <br />
        <br />
      <div className='flex flex-row item-center justify-evenly'>
        <GoogleButton onClick={(e) =>{RegisterWithGoogle(e)} }/>
        

        <button className='btn'>
          Sign in with Facebook
        </button>

        <button className='btn2'>
          Sign in with Apple
        </button>
      </div>

      <button className='btn' onClick={(e) =>{SignOut(e)} }>
         Logout
        </button>

      </h1>
      




    </div>

  );
};
export default Signin;
