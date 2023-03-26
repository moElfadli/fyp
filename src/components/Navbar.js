import React, { useEffect } from "react";
import { MdOutlineQuiz } from "react-icons/md";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();
  const { Logout, userRecord } = UserAuth();

  useEffect(() => {
    if (userRecord !== null) {
      // this is where we check if the user is an admin and redirect them to the appropriate page
      if (userRecord.admin === true) {
        navigate("/ManageQuizzes");
      } else {
        navigate("/StudentHomepage");
      }
    }
    // this line is used to disable the warning that appears when we use the useEffect hook as we are not using the navigate function in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRecord]);

  async function SignOut(e) {
    // this prevents the page from reloading when the button is clicked
    e.preventDefault();
    await Logout()
      .then(() => {
        console.log("Signed Out") 
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="lg:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="fon-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-400 mr-1 pt-2">
            <MdOutlineQuiz size={"3rem"} />
          </span>
          ONLINE QUIZ SYSTEM
        </div>
        <ul className="">
          {!userRecord ? (
            <div className="hidden md:flex items-center space-x-5 font-medium text-gray-600">
              <li
              onClick={(e) => { 
                navigate("/Login");

                }}
                className="navbar-items"
              >
                <BiLogIn />
                Login
              </li>
              <li
               onClick={(e) => {
                navigate("/Register");
               
                }}
                className="navbar-items"
              >
                <CgProfile />
                Register
              </li>
            </div>
          ) : (
            <li
              onClick={(e) => {
                SignOut(e);
              }}
              className="navbar-items"
            >
              <BiLogOut />
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
