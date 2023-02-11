import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherSubmission = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mt-10 text-center text-6xl font-semibold">
        Review Submissions for Marking
      </p>
      <p className="mr-8 mt-10 text-center text-2xl">
      In this page you can review the submissions for each quiz. You can then mark the submissions and give feedback to the students.
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
      <div className = "flex justify-center mt-10">
      <div className="flex flex-col mr-8">
        <button
          className="btnReview rounded-full py-8 px-10 hover:bg-red-darke mr-8"
          onClick={() => navigate("/geographySubmission")}
        >
          Geography Submissions
        </button>
        <br />
        <br />

        <button
          className="btnReview2 rounded-full py-8 px-10 hover:bg-red-darke mr-8"
          onClick={() => navigate("/historySubmissions")}
        >
          History Submissions
        </button>
        <br />
        <br />
        </div>


        <div className="flex flex-col mr-8">
        <button
          className="btnReview3 rounded-full py-8 px-10 hover:bg-red-darke mr-8"
          onClick={() => navigate("/mathSubmission")}
        >
          Maths Submissions
        </button>
        <br />
        <br />

        <button
          className="btnReview4 rounded-full py-8 px-10 hover:bg-red-darke"
          onClick={() => navigate("/scienceSubmission")}
        >
          Science Submissions
        </button>
        <br />
        <br />
        </div>
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
export default TeacherSubmission;
