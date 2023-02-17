import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import ManageQuizzes from './pages/Quiz/ManageQuizzes';
import CreateQuiz from './pages/Quiz/CreateQuiz';
import ShowQuestions from './pages/Quiz/ShowQuestions';
import AddMultipleChoice from './pages/Quiz/AddMultipleChoice';
import AddOneWord from './pages/Quiz/AddOneWord';
import CreateQuestions from './pages/Quiz/CreateQuestions';
import StudentSubmission from './pages/Submissions/StudentSubmission';
import TeacherReviewSubmission from './pages/Submissions/TeacherReviewSubmission';
import StudentReviewSubmission from './pages/Submissions/StudentReviewSubmission';
import StudentHomepage from './pages/StudentHomepage';





function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/ShowQuestions/:quizName' element={<ShowQuestions />} />
            <Route path='/CreateQuestions/:quizName' element={<CreateQuestions />} />
            <Route path='/StudentSubmission/:quizName' element={<StudentSubmission />} />
            <Route path='/TeacherReviewSubmission/:quizName' element={<TeacherReviewSubmission />} />
            <Route path='/StudentReviewSubmission/:quizName' element={<StudentReviewSubmission />} />
            <Route path='/StudentHomepage' element={<StudentHomepage />} />
         

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