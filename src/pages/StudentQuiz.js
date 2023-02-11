import React from "react";
import { useNavigate } from "react-router-dom";

const StudentQuiz = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p className="mt-4 text-5xl font-semibold">
        Attempt Quizzes 
      </p>
      <p className="mr-8 mt-10 text-center text-2xl">
       In this page you can attempt the quizzes by clicking the buttons below.
      </p>
      <br /> 
      <br />

      <div
      className="mx-auto"
      style={{
        width: "fit-content",
        display: "inline-flex flex",
        textAlign: "center",
        }}
      >
        <div className = "flex justify-center mt-20">
      <button
        className="btn3 rounded-full py-10 px-20 hover:bg-blue-dark mr-4"
        onClick={() => navigate("/geographyQuestions")}
      >
        Geography Quiz
      </button>
    
      <button
        className="btn4 rounded-full py-10 px-20 hover:bg-red-dark mr-4"
        onClick={() => navigate("/historyQuestions")}
      >
        History Quiz
      </button>
  
      <button
        className="btn5 rounded-full py-10 px-20 hover:bg-red-dark mr-4"
        onClick={() => navigate("/mathQuestions")}
      >
        Maths Quiz
      </button>
    
      <button
        className="btn6 rounded-full py-10 px-20 hover:bg-red-dark mr-4"
        onClick={() => navigate("/scienceQuestions")}
      >
        Science Quiz
      </button>
      </div>
      </div>
     
      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/StudentHome")}
      >
        Back
      </button>
    </div>
  );
};

export default StudentQuiz;
