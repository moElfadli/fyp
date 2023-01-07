import React from 'react';
import { useNavigate } from 'react-router-dom';


const TeacherPage = () => {

  const navigate = useNavigate();
  

  return (
    <div>
      <p className='mt-10 text-center text-6xl font-semibold'>Teacher & Marking Page</p>
      <br />
      <br />

      <div className="mx-auto" style={{ width: "fit-content", display: "flex", flexDirection: "column" }}>
        <button className="btn3 rounded-full py-4 px-10 hover:bg-blue-dark" onClick={() => navigate("/geographySubmission") }>
          Geography Submissions
        </button>
        <br />
        <br />
     
  
        <button className="btn4 rounded-full py-4 px-10 hover:bg-red-dark" onClick={() => navigate("/historySubmissions")}>
          History Submissions
        </button>
        <br />
        <br />

        <button className="btn5 rounded-full py-4 px-10 hover:bg-red-dark" onClick={() => navigate("/mathSubmission")}>
          Maths Submissions
        </button>
        <br />
        <br />
  
        <button className="btn6 rounded-full py-4 px-10 hover:bg-red-dark" onClick={() => navigate("/scienceSubmission")}>
          Science Submissions
        </button>
      </div>
  
      <button className="btnBack2 rounded-full py-2 px-10 hover:bg-red-dark" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
  
  
};
export default TeacherPage;
