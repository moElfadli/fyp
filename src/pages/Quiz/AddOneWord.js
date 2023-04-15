import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const AddOneWord = () => {
   const navigate = useNavigate();
    const [question, setQuestion] = useState({ questionType: "ow" });
    const { quizName } = useParams();

    function handleChange(e) {
        // this handles the state changes of the form inputs and updates the state
        const { name, value } = e.target;
        setQuestion({ ...question, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const quizref = collection(db, "Quiz", quizName, "Questions");
        await addDoc(quizref, { ...question })
            .then(() => {
                alert("Question added successfully");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    return (
      
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100  mt-[5rem]   ">
         <h1 className="text-6xl font-bold text-gray-800 -mt-32">
                   
                    Create Written Answer Question
                </h1>
                <p className="text-1xl mb-20 mt-6 ml-6 text-center"> In this section you can create Written Answer Questions for your quiz. You can add as many questions as you want. </p>

                <form>
                    <label className="block mb-2 font-bold text-xl">
                        Question:
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="question"
                            className="create-ow-question"
                        />
                    </label>
                    <label className="block mb-2 font-bold text-xl">
                        Correct Answer:
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="correctAnswer"
                            className="create-answer"
                        />
                    </label>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                        value="Submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-44 rounded"
                    >
                        Submit
                    </button>
                    <button  onClick={() => navigate(`/ManageQuestions/${quizName}`)} className="btnBack rounded-full py-2 px-10 hover:bg-red-dark 
            fixed bottom-8 right-4 p-4">
                        Back
                    </button>
                </form>
            </div>
       
    );
}

export default AddOneWord;
