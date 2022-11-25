import { async } from '@firebase/util';
import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const { GoogleSignIn } = UserAuth();

  const handleGoogleSignIn = async() => {
    try {
      await GoogleSignIn()
    } catch (error) {
      console.log(error);
    }
 
}

  return (
    <div>
        <h1 className='text-center text 4xl font-bold py-8'>Signin</h1>
        <div className='max-w-[260px] m-auto py-4'>
            <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    </div>
  );
};
export default Signin;
