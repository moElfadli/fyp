import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const OneWord = ({ quizName }) => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState({ questionType: "ow" });

  function handleChange(e) {
    // this handles the state changes of the form inputs and updates the state
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const quizref = collection(db, quizName);
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
      <div className="bg-white rounded-lg  p-6">
        <h1 className="className='text-2xl font-bold mb-4 ml-6">
          {" "}
          Create Written Answer Question
        </h1>

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

          <button
            className="btnBack rounded-full py-2 px-10 hover:bg-red-dark -mb-60"
            onClick={() => navigate("/TeacherPage")}
          >
            Back
          </button>
        </form>
        <br></br>
      </div>
    </div>
  );
};
export default OneWord;
