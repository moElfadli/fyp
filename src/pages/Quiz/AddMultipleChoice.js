import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// this is a functional component that will render the multiple choice question form
const AddMultipleChoice = () => {
  // this is the state that will hold the question data
  const [question, setQuestion] = useState({ questionType: "mc" });
  const { quizName } = useParams();
  const navigate = useNavigate();
  

  // this is the function that will handle the state changes of the form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const quizref = collection(db, "Quiz", quizName, "Questions");
    // here we add the question to the database b
    await addDoc(quizref, { ...question })
      .then(() => {
        alert("Question added successfully");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
  
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-[5rem]  ">
      
      <h1 className="text-6xl font-bold text-gray-800 -mt-1">Create {quizName} Questions</h1>

        <p className="text-1xl mb-20 mt-6 ml-6 text-center"> In this section you can create multiple choice questions for your quiz. You can add as many questions as you want. </p>

        <h2 className="className='text-2xl font-bold ml-6 ">
          Create Multiple Choice Question
        </h2>

        <form>
          <label className="block mb-2 font-bold text-xl">
            Question:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="question"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 1:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option1"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 2:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option2"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 3:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option3"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 4:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option4"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Correct Answer:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="correctAnswer"
              className=" h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-48 rounded"
          >
          
            Submit
          </button>
          
          <button
            className="btnBack rounded-full py-2 px-10 hover:bg-red-dark 
            fixed bottom-8 right-4 p-4"
            onClick={() => navigate(`/ShowQuestions/${quizName}`)}
          >
            Back
          </button>
         
        </form>
      </div>
   
  );
};
export default AddMultipleChoice;
