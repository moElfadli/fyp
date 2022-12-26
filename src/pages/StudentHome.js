import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
        

        <p className='mt-20 text-center text-6xl font-semibold'>Topics & Submission Reviews</p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
       
        <button className="btn3 btn-blue" onClick={() => navigate("/geographyQuestions") }>
          Geography
        </button>
        <button onClick={() => navigate("/reviewGeographySubmission") }>
          Review Submissions
        </button>

        

        <button className="btn4 btn-red" onClick={() => navigate("/historyQuestions")}>
          History
        </button>
        <button onClick={() => navigate("/reviewHistorySubmission") }>
          Review Submissions
        </button>

        
        <button className="btn5 btn-red" onClick={() => navigate("/mathQuestions")}>
          Maths
        </button>
        <button onClick={() => navigate("/reviewMathsSubmission") }>
          Review Submissions
        </button>

        <button className="btn6 btn-red" onClick={() => navigate("/scienceQuestions")}>
          Science
        </button>
        <button onClick={() => navigate("/reviewScienceSubmission") }>
          Review Submissions
        </button>

    
       
        <button className="btn7 btn-red" onClick={() => navigate("/")}>
          Back
        </button>
        
        
    </div>

  );
};
export default HomePage;
