import React from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

import { deleteDoc, doc } from "firebase/firestore";

const ManageQuizzes = () => {
  const navigate = useNavigate();
  // this is the state that will hold the data from the database
  const [QuizCollections, setQuizCollections] = useState([]);
  // this is a reference to the Quiz collection in the database
  const QuizCollectionRef = collection(db, "Quiz");

  useEffect(() => {
    const getQuizCollections = async () => {
      const data = await getDocs(QuizCollectionRef);
      //set quiz collections is a function that sets the state to the data from the database
      setQuizCollections(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getQuizCollections();
  }, []);

  // this function will delete a quiz from the database
  async function deleteQuiz(id) {
    const quizRef = doc(db, "Quiz", id);
    await deleteDoc(quizRef)
      .then(() => {
        alert("Quiz deleted successfully");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    setQuizCollections(QuizCollections.filter((quiz) => quiz.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 
    mt-[5rem] ">
      <h1 className="text-6xl font-bold text-gray-800 mb-10">
        Manage Quizzes & Review Submissions
      </h1>
      <p className="text-xl text-gray-600 mb-20 text-center max-w-lg">
        In this page you can create and manage quizzes by adding questions or
        deleting them. You can also review submissions.
      </p>
      <br />
      <div
        className="flex flex-row items-center justify-center flex-wrap gap-4 " 
      >
      
        {/* //map through the quiz collections and return a button for each quiz */}
        {QuizCollections.map((quiz) => {
          return (
            <div>
              <button
                key={quiz.id}
                onClick={() => navigate(`/ShowQuestions/${quiz.id}`)}
                className="p-6 text-lg font-medium text-white bg-blue-600
             rounded-full hover:bg-blue-700"
              >
                Manage {quiz?.id} Quiz
              </button>
          
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={() => deleteQuiz(quiz.id)}
                  className=" p-2 text-lg mt-2 font-medium text-white bg-red-600 rounded-full hover:bg-red-700"
                ><AiFillDelete size='1.5rem' />
                  {/* Delete {quiz?.id} Quiz */}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate("/CreateQuiz")}
        className="mt-8 py-6 px-10 text-2xl font-medium text-white bg-green-500 rounded-full hover:bg-green-600"
      >
        Create Quiz
      </button>
    </div>
  );
};

export default ManageQuizzes;
