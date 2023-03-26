import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext';


const Login = () => {
    const { emailLogin, GoogleSignIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate();

    async function submitForm(e) {
        e.preventDefault();

        
        setLoading(true);
        await emailLogin(email,password).then((result) => {
            if(result === true){
                navigate('/');
            }
            else{
                console.log("console.error();");
            }
            setLoading(false);
        });
        

    }

async function RegisterWithGoogle(e){

    e.preventDefault();
    await GoogleSignIn().then((result) => {
        if(result === true){
            navigate('/');
        }
        else{
            console.log("console.error();");
        }
        setLoading(false);
    });
}
   

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 
        mt-[5rem] ">
           <div className=" w-full max-w-md">
           <div className="bg-white shadow-md rounded px-8 py-8">
           <h1 className='text-2xl text-center font-bold mb-4'>Sign in</h1>

                 <form className= "space-y-4">
                            <div>
                            <label className="block text-gray-800 font-bold mb-2">
                                    Email
                                </label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email"                
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-800 font-bold mb-2">
                                    Password
                                </label>
                                <input className= "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password"           
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>  
                            
                  

                    <button onClick={submitForm} disabled={loading}
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mb-4">
                        Sign in
                    </button>

                    </form>
                    <div className="mt-6 flex flex-col items-center">
                    <Link className="items-center" to="/register">Create new account</Link>

                    <div className="flex flex-col items-center">
                        <hr className="border-gray-800 dark:border-gray-600"/>
                        <div className="text-gray-800 dark:text-white bg-white dark:bg-gray-900 px-4 mt-3 font-medium">or</div>
                    </div>
                    </div>

                    <div className="flex flex-row w-full">
                        <button onClick={(e) => RegisterWithGoogle(e)} disabled={loading}
                        className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
                        Sign up With Google
                        </button>
                       
                    </div>
                  
                </div>
            </div>
        </div>
    );
}


export default Login;