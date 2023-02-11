import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// this is a functional component that will render the multiple choice question form
const MultpleChoice = ({ quizName }) => {
  // this is the state that will hold the question data
  const [question, setQuestion] = useState({ questionType: "mc" });
  const NameOfQuiz = quizName.split("Quiz")[0];

  // this is the function that will handle the state changes of the form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const quizref = collection(db, quizName);
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
    <div>
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 ml-6 text-center">Create {NameOfQuiz} Questions</h1>

        <p className="text-1xl mb-20 mt-6 ml-6 text-center"> In this page you can create mutliple choice questions & written answers. 
        You may add multiple questions of each type of question.</p>

        <h2 className="className='text-2xl font-bold mb-4 ml-6">
          Create Multiple Choice Question
        </h2>

        <form>
          <label className="block mb-2 font-bold text-xl">
            Question:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="question"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 1:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option1"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 2:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option2"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 3:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option3"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Option 4:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="option4"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <label className="block mb-2 font-bold text-xl">
            Correct Answer:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="correctAnswer"
              className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            />
          </label>

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
export default MultpleChoice;
