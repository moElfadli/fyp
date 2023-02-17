import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Question from "./RenderQuestion";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ShowQuestions = () => {
  const [Questions, SetQuestions] = useState([]);
  const { userRecord } = UserAuth();
  const navigate = useNavigate();
  const { quizName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const quizref = collection(db, `Quiz/${quizName}/Questions`);
      const snapshot = await getDocs(quizref);
      snapshot.forEach((doc) => {
        SetQuestions((Questions) => [
          ...Questions,
          { id: doc.id, data: doc.data() },
        ]);
      });
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);

async function deleteQuestion(id) {
    const questionRef = doc(db, `Quiz/${quizName}/Questions`, id);
    await deleteDoc(questionRef).then(() => {
        alert("Question deleted successfully");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    SetQuestions(Questions.filter((question) => question.id !== id));
    }


  // we are mapping through the questions array and returning a question component for each question
  return (
    <div>
      <h1 className="text-6xl font-bold text-center text-gray-900   text-white font-bold py-4 px-10 rounded">
        {quizName} Quiz
      </h1>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2" onClick={() => navigate(`/Quiz/${quizName}/AddMultipleChoice`)}>Add Multiple Choice Question</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2" onClick={() => navigate(`/Quiz/${quizName}/AddOneWord`)}>Add Written Answer Question</button>

      {Questions.map((question, quiz) => {
        return (
          <div>
            <Question
              key={quiz}
              questionId={question.id}
              question={question.data}
              index={quiz}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 rounded mt-4 ml-2"
              onClick={() => deleteQuestion(question.id)} 
            >
              Delete
            </button>
          </div>
        );
      })}

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
export default ShowQuestions;
