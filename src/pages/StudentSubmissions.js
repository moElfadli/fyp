import React from "react";
import { useNavigate } from "react-router-dom";

const StudentSubmissions = () => {
  const navigate = useNavigate();

  return (
    
    <div className="text-center">
      <p className="mt-4 text-4xl font-semibold">
        Review Your Submissions
      </p>
      
      <p className="mr-8 mt-10 text-center text-2xl">
       In this page you can review your submissions for each quiz. You can then see your marks and feedback from the teacher.
      </p>
        <br />
        <br />
        

      <div className = "flex justify-center mt-20">
      <div className="flex flex-col mr-8">
        
      <button
      
        className="btnReview rounded-full py-8 px-10 mr-8"
        onClick={() => navigate("/reviewGeographySubmission")}
      >
        Review Geography Submissions
      </button>
      
     <br />
     <br />
      <button
        className="btnReview2 rounded-full py-8 px-10 mr-8"
        onClick={() => navigate("/reviewHistorySubmission")}
      >
        Review History Submissions
      </button>
      </div>
     
      <div className="flex flex-col mr-8">
      <button
        className="btnReview3 rounded-full py-8 px-10 mr-8"
        onClick={() => navigate("/reviewMathsSubmission")}
      >
        Review Maths Submissions
      </button>
      <br />
     <br />
     
      <button
        className="btnReview4 rounded-full py-8 px-10"
        onClick={() => navigate("/reviewScienceSubmission")}
      >
        Review Science Submissions
      </button>
      <br />
      </div>
      </div>
      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate("/StudentHome")}
      >
        Back
      </button>
    </div>
  );
};

export default StudentSubmissions;
