import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p className="mt-4 text-5xl font-semibold">Quiz Topics & Submission Reviews</p>
     <br /> <br />
      <button
        className="btn3 rounded-full py-4 px-10 mx-auto hover:bg-blue-dark"
        onClick={() => navigate('/geographyQuestions')}
      >
        Geography Quiz
      </button>
      <br />
      <br />
      <button className="btnReview rounded-full py-2 px-4 hover:bg-gray-darker" onClick={() => navigate('/reviewGeographySubmission')}>
        Review Geography Submissions
      </button>
      <br />
      <br />
      <button
        className="btn4 rounded-full py-4 px-10 mx-auto hover:bg-red-dark"
        onClick={() => navigate('/historyQuestions')}
      >
        History Quiz
      </button>
      <br />
      <br />
      <button className="btnReview rounded-full py-2 px-4 hover:bg-gray-darker" onClick={() => navigate('/reviewHistorySubmission')}>
        Review History Submissions
      </button>
      <br />
      <br />
      <button
        className="btn5 rounded-full py-4 px-10 mx-auto hover:bg-red-dark"
        onClick={() => navigate('/mathQuestions')}
      >
        Maths Quiz
      </button>
      <br />
      <br />
      <button className="btnReview rounded-full py-2 px-4 hover:bg-gray-darker" onClick={() => navigate('/reviewMathsSubmission')}>
        Review Maths Submissions
      </button>
      <br />
      <br />
      <button
        className="btn6 rounded-full py-4 px-10 mx-auto hover:bg-red-dark"
        onClick={() => navigate('/scienceQuestions')}
      >
        Science Quiz
      </button>
      <br />
      <br />
      <button className="btnReview rounded-full py-2 px-4 hover:bg-gray-darker" onClick={() => navigate('/reviewScienceSubmission')}>
        Review Science Submissions
      </button>
      <br />
      <br />
      <button className="btnBack rounded-full py-2 px-10 hover:bg-red-dark" onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
  
  
};

export default HomePage;
