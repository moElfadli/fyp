import React from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";

const StudentHomepage = () => {
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100
     mt-[5rem] ">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Start a Quiz & Review Submissions</h1>
      <p className="mx-auto mb-12 text-center  text-lg text-gray-600">
        In this page you can start a quiz and review your submissions.
      </p>
      <br />
      <div
        className="grid grid-cols-2 md:grid-cols-2 gap-12 " 
      >
        {/* //map through the quiz collections and return a button for each quiz */}
        {QuizCollections.map((quiz) => {
          return (
            // the key is the id of the quiz
            <div key={quiz.id} className="p-6 bg-white rounded-lg shadow-xl">
              <button
                onClick={() => navigate(`/StudentSubmission/${quiz.id}`)}
                className="block w-full py-4 px-8 text-lg font-semibold text-white bg-green-600
                rounded-full hover:bg-green-700"
              >
              
                Start {quiz?.id} Quiz 
              </button>
             
              <button
              
                onClick={() => navigate(`/StudentReviewSubmission/${quiz.id}`)}
                className="block w-full mt-4 py-4 px-4 text-lg font-semibold text-white  bg-blue-600
                rounded-full hover:bg-blue-700"
              >
              
                Review {quiz?.id} Submission 
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentHomepage;
