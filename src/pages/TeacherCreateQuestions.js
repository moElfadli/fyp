import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherCreateQuestions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mt-10 text-center text-6xl font-semibold">
        Create Questions
      </p>
      <p className="mt-10 text-center text-2xl">
        In this page you can create questions for each subject. The question types are multiple choice and written answers.
        </p>
      <br />
      <br />

      <div
      className="mx-auto"
      style={{
        width: "fit-content",
        display: "inline-flex flex",
        textAlign: "center",
        }}
      >
        <div className = "flex justify-center mt-20">
        <button
          className="btn3 rounded-full py-10 px-10 hover:bg-blue-dark mr-4"
          onClick={() => navigate("/geographyQuestion")}
        >
          Create Geography Quiz
        </button>
        <br />
        <br />

        <button
          className="btn4 rounded-full py-10 px-10 hover:bg-red-dark mr-4"
          onClick={() => navigate("/historyQuestion")}
        >
          Create History Quiz
        </button>
        <br />
        <br />

        <button
          className="btn5 rounded-full py-10 px-10 hover:bg-red-dark mr-4"
          onClick={() => navigate("/mathQuestion")}
        >
          Create Maths Quiz
        </button>
        <br />
        <br />

        <button
          className="btn6 rounded-full py-10 px-10 hover:bg-red-dark mr-4"
          onClick={() => navigate("/scienceQuestion")}
        >
          Create Science Quiz
        </button>
      </div>
      </div>

      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/TeacherPage")}
      >
        Back
      </button>
      <br />
    </div>
  );
};
export default TeacherCreateQuestions;
