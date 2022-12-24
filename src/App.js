
import React from 'react';
import { BrowserRouter as Router,Route, Routes, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
// import Account from './pages/Account';
import StudentHome from './pages/StudentHome';
import TeacherPage from './pages/TeacherPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Submission from './pages/Submission';



function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Router>
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/TeacherPage' element={<TeacherPage />} />
            <Route path='/StudentHome' element={<StudentHome />} />
            <Route path='/mathQuestions' element={<Quiz quizName="MathsQuiz"/>} />
            <Route path='/geographyQuestions' element={<Quiz quizName="GeographyQuiz "/>} />
            <Route path='/historyQuestions' element={<Quiz quizName="HistoryQuiz"/>} />
            <Route path='/scienceQuestions' element={<Quiz quizName="ScienceQuiz"/>} />

            <Route path='/geographySubmission' element={<Submission submissionName="GeographySubmissions"/>} />
            <Route path='/mathSubmissions' element={<Submission submissionName="MathsSubmissions"/>} />
            <Route path='/historySubmission' element={<Submission submissionName="HistorySubmissions"/>} />
            <Route path='/scienceSubmission' element={<Submission submissionName="ScienceSubmissions"/>} />
          
           
           
            
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;