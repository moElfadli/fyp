import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p className="mt-4 text-5xl font-semibold">
        Attempt Quizzes & Review Submissions
      </p>
      <p className="mr-8 mt-10 text-center text-2xl">
      In this page you can attempt the quizzes and review your submissions by clicking the buttons below.
      </p>
      <br />

      

      <div
        className="mx-auto"
        style={{
          width: "fit-content",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <div className= "flex space-x-10">
      <button
        className="btn3 mt-20 rounded-full text-4xl py-8 px-8 hover:bg-blue-dark"
        onClick={() => navigate("/StudentQuiz")}
      >
        Attempt a Quiz
      </button>
     
      <button
        className="btn5 mt-20 rounded-full text-4xl py-8 px-8 hover:bg-red-dark"
        onClick={() => navigate("/StudentSubmissions")}
      >
        Review Your Submissions
      </button>
      </div>
      </div>
      
      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default HomePage;
