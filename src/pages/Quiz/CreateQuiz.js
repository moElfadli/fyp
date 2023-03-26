import React from "react";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState();

  function handleChange(e) {
 // this handles the change in the input field and sets the state to the value of the input field. in this case the value of the input field is the name of the quiz
    const { value } = e.target;
    setQuiz(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // this creates a reference to the quiz collection in the database
    const quizref = doc(db, "Quiz", quiz);
    // the set doc function creates a new document in the quiz collection with the name of the quiz as the document name
    await setDoc(quizref, {"test": "test"} )
      .then(() => {
        alert("Quiz added successfully");
        navigate("/ManageQuizzes");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <div >
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-[2rem] ">
      <h1 className="text-6xl font-bold text-gray-800 mb-10">
          Create Quiz
        </h1>

        <form>
          <label className="block mb-2 font-bold text-xl">
            Quiz Name:
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="question"
              className="create-quiz"
            />
          </label>

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 rounded"
          >
           
            Submit
          </button>

          <button
            className="btnBack rounded-full py-2 px-10 hover:bg-red-dark 
            fixed bottom-8 right-4 p-4"
            onClick={() => navigate("/ManageQuizzes")}
          >
            Back
          </button>
        </form>
        <br></br>
      </div>
    </div>
  );
};
export default CreateQuiz;
