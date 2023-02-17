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
  }, []);

  return (
    <div className="text-center">
      <p className="mt-4 text-5xl font-semibold">Create & Manage Quizzes</p>
      <p className="mr-8 mt-10 text-center text-2xl">
        In this page you can create and manage quizzes by adding questions or
        deleting them.
      </p>
      <br />
      <div className="flex flex-row">
        {/* //map through the quiz collections and return a button for each quiz */}
        {QuizCollections.map((quiz) => {
          return (
            // the key is the id of the quiz
            <div key={quiz.id} className="flex flex-row">
              <button
                onClick={() => navigate(`/StudentSubmission/${quiz.id}`)}
                className="btn3 mt-20 rounded-full text-4xl py-8 px-8 hover:bg-blue-dark"
              >
              
                Start Quiz {quiz?.id}
              </button>
              <button
                onClick={() => navigate(`/StudentReviewSubmission/${quiz.id}`)}
                className="btn3 mt-20 rounded-full text-4xl py-8 px-8 hover:bg-blue-dark"
              >
              
                Review Submission {quiz?.id}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentHomepage;
