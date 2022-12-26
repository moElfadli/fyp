import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const TeacherPage = () => {

  const navigate = useNavigate();
  

  return (
    <div>
        

        <p className='mt-20 text-center text-6xl font-semibold'>Your Teacher</p>

        <button className="btn3 btn-blue" onClick={() => navigate("/geographySubmissions") }>
          Geography Submissions
        </button>

        <button className="btn4 btn-red" onClick={() => navigate("/historySubmissions")}>
          History Submissions
        </button>
        
        <button className="btn5 btn-red" onClick={() => navigate("/mathSubmissions")}>
          Maths Submissions
        </button>

        <button className="btn6 btn-red" onClick={() => navigate("/scienceSubmissions")}>
          Science Submissions
        </button>
    
       
        <button className="btn7 btn-red" onClick={() => navigate("/")}>
          Back
        </button>
           
        
    </div>
  );
};
export default TeacherPage;
