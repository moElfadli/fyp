import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection, query, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Question from "./RenderQuestion";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsTextCenter } from "react-icons/bs";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { GrScorecard } from "react-icons/gr";

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
    await deleteDoc(questionRef)
      .then(() => {
        alert("Question deleted successfully");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    SetQuestions(Questions.filter((question) => question.id !== id));
  }

  // we are mapping through the questions array and returning a question component for each question
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-bold text-gray-800 p-4">{quizName} Quiz</h1>

      <br />
    

      <div className="flex flex-row -mt-4 space-x-4">
        <button
          className="inline-flex items-center justify-center rounded-md shadow-sm 
bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6"
          onClick={() => navigate(`/Quiz/${quizName}/AddMultipleChoice`)}
        >
          Add Multiple Choice Question{" "}
          <RiCheckboxMultipleFill className="ml-2" />
        </button>

        <button
          className="inline-flex items-center justify-center rounded-md shadow-sm 
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6"
          onClick={() => navigate(`/Quiz/${quizName}/AddOneWord`)}
        >
          Add Written Answer Question <BsTextCenter className="ml-2" />
        </button>
        <button
          className="inline-flex items-center justify-center rounded-md shadow-sm 
bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6"
          onClick={() => navigate(`/TeacherReviewSubmission/${quizName}`)}
        >
         Review Submissions <GrScorecard className="ml-2" />
        </button>
      </div>
      <div className="mt-8 grid gap-4">
        {Questions.map((question, index) => {
          return (
            <div className=" rounded p-4" key={index}>
              <Question
                questionId={question.id}
                question={question.data}
                index={index}
              />

              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white f
                ont-bold py-2 px-4 rounded  mr-2"
                  onClick={() => deleteQuestion(question.id)}
                >
                  <AiFillDelete className="inline-block mr-2" size={"1.5rem"} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <br />

      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark 
        fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/ManageQuizzes")}
      >
        Back
      </button>

      <br />
    </div>
  );
};
export default ShowQuestions;
