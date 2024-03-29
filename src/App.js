import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import ManageQuizzes from './pages/Quiz/ManageQuizzes';
import CreateQuiz from './pages/Quiz/CreateQuiz';
import ManageQuestions from './pages/Quiz/ManageQuestions';
import AddMultipleChoice from './pages/Quiz/AddMultipleChoice';
import AddOneWord from './pages/Quiz/AddOneWord';
import CreateQuestions from './pages/Quiz/CreateQuestions';
import StudentSubmission from './pages/Submissions/StudentSubmission';
import TeacherReviewSubmission from './pages/Submissions/TeacherReviewSubmission';
import StudentReviewSubmission from './pages/Submissions/StudentReviewSubmission';
import StudentHomepage from './pages/StudentHomepage';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';







function App() {
  return (
    <div>
      <AuthContextProvider>
       
        <Router>
        <Navbar />
    
          <Routes>
            <Route path='/ManageQuestions/:quizName' element={<ManageQuestions />} />
            <Route path='/CreateQuestions/:quizName' element={<CreateQuestions />} />
            <Route path='/StudentSubmission/:quizName' element={<StudentSubmission />} />
            <Route path='/TeacherReviewSubmission/:quizName' element={<TeacherReviewSubmission />} />
            <Route path='/StudentReviewSubmission/:quizName' element={<StudentReviewSubmission />} />
            <Route path='/StudentHomepage' element={<StudentHomepage />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
        
         

            <Route path='/CreateQuiz' element={<CreateQuiz />} />
            <Route path='/ManageQuizzes' element={<ManageQuizzes />} />
            <Route path='/Quiz/:quizName/AddMultipleChoice' element={<AddMultipleChoice />} />
            <Route path='/Quiz/:quizName/AddOneWord' element={<AddOneWord />} />
           


            <Route path='/' element={<Home />} />
            
            
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;