import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mt-10 text-center text-6xl font-semibold">
        Create Questions & Review Submissions
      </p>
      <p className="mt-10 text-center text-2xl">
        If you would like to create a new question, click the create questions button below. If you would like to review submissions, click the review submissions button below.
      </p>
      <br />
      <br />
      <br />
      <br />
      <div
        className="mx-auto"
        style={{
          width: "fit-content",
          display: "flex space-x-8",
          flexDirection: "row",
        }}
      >
        <div className= "flex space-x-10">
        <button
          className="btn3 rounded-full text-4xl py-10 px-10 hover:bg-blue-dark"
          onClick={() => navigate("/TeacherCreateQuestions")}
        >
          Create Questions
        </button>
       

        <button
           className="btn5 rounded-full text-4xl py-10 px-10 hover:bg-red-dark"
          onClick={() => navigate("/TeacherSubmission")}
        >
          Review Submissions
        </button>

</div>
        
      </div>

      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <br />
    </div>
  );
};
export default TeacherPage;
