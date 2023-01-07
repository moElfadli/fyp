import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import StudentHome from './pages/StudentHome';
import TeacherPage from './pages/TeacherPage';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Submission from './pages/Submission';
import ReviewSubmission from './pages/ReviewSubmission';



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
            <Route path='/mathSubmission' element={<Submission submissionName="MathsSubmissions"/>} />
            <Route path='/historySubmission' element={<Submission submissionName="HistorySubmissions"/>} />
            <Route path='/scienceSubmission' element={<Submission submissionName="ScienceSubmissions"/>} />
          
            <Route path='/reviewMathsSubmission' element={<ReviewSubmission submissionTableName="MathsSubmissions"/>} />
            <Route path='/reviewHistorySubmission' element={<ReviewSubmission submissionTableName="HistorySubmissions"/>} />
            <Route path='/reviewGeographySubmission' element={<ReviewSubmission submissionTableName="GeographySubmissions"/>} />
            <Route path='/reviewScienceSubmission' element={<ReviewSubmission submissionTableName="ScienceSubmissions"/>} />

           
           
            
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;