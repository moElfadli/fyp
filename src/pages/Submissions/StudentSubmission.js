import React from "react";
import { useState, useEffect } from "react";
import { doc, getDocs, setDoc, collection, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import Question from "./RenderQuestionInput";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// this is a functional component that takes in the quizName as a prop
const StudentSubmission = () => {
  
  const { quizName } = useParams();
  // this is where we will get the questions from the database
  const [Questions, SetQuestions] = useState([]);
  const [AnswerSubmissions, SetAnswerSubmissions] = useState([]);
  const { userRecord } = UserAuth();
  const navigate = useNavigate();

useEffect(() => {
    // this function fetches the data from the database
    async function fetchData() {
        // creating a reference to the Questions collection in the database
        const quizref = collection(db, `Quiz/${quizName}/Questions`);
        // getting the data from the database
        const snapshot = await getDocs(quizref);
        // looping through the data and adding it to the Questions array
        snapshot.forEach((doc) => {
            SetQuestions((Questions) => [
                ...Questions,
                { id: doc.id, data: doc.data() },
            ]);
        });
        // creating a reference to the Submissions collection in the database
        const submissionRef = collection(db, `Quiz/${quizName}/Submissions/${userRecord.id}`);
        // getting the data from the database
        const submissionSnapshot = await getDocs(submissionRef);
        // looping through the data and adding it to the AnswerSubmissions array
        submissionSnapshot.forEach((doc) => {
            SetAnswerSubmissions((AnswerSubmissions) => [
                ...AnswerSubmissions,
                { id: doc.id, data: doc.data() },
            ]);
        });
    }

    // we are calling the fetchData function
    fetchData()
      // if there is an error we log it to the console
      .catch((error) => {
        console.log(error);
      });
  }, [quizName]);

  // this function submits the answers to the database
  function submitAnswers() {
    //creating a reference to the AnswerSubmissions collection in the database
    const docRef = doc(db, "Quiz", quizName, "Submissions", userRecord.id);

    //creating a new object to store the marked answers
    var markedAnswers = {};

    //this is a counter used to loop trhough the questions array
    var index = 0;

    //this loops through the answer submissions object and compares the answer to the question's correct answer
    Object.entries(AnswerSubmissions).forEach(([key, value]) => {
      //if the answer is correct we set the score to 1
      if (Questions[index].data.questionType !== "ow") {
        if (value.answer === Questions[index].data.correctAnswer) {
          value.score = 1;
          value.feedback = "Correct";
        } else {
          value.score = 0;
          value.feedback = "Incorrect";
        }
      }

      //we add the answer to the markedAnswers object
      markedAnswers[key] = value;

      //incrementing the counter to go to the next question
      index++;
    });

    //adding all the answers to the database document
    setDoc(docRef, markedAnswers)
      .then(() => {
        //redirecting to the student home page
        navigate("/StudentHome");
      })
      .catch((error) => {
        alert(error);
      });
  }

  // we are mapping through the questions array and returning a question component for each question
  return (
    <div>
      <h1 className="text-6xl font-bold text-center text-gray-900   text-white font-bold py-4 px-10 rounded">
        Quiz
      </h1>
      <br />

      {Questions.map((question, index) => (
        <Question
          key={index}
          question={question.data}
          questionId={question.id}
          AnswerSubmissions={AnswerSubmissions}
          SetAnswerSubmissions={SetAnswerSubmissions}
        />
      ))}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 rounded mt-4 ml-2"
        onClick={() => submitAnswers()}
      >
        Submit
      </button>
      <br />

      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark 
        fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/StudentHome")}
      >
        Back
      </button>

      <br />
    </div>
  );
};
export default StudentSubmission;
