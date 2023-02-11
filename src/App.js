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
import CreateQuestion from './pages/CreateQuestion';
import TeacherSubmission from './pages/TeacherSubmission';
import TeacherCreateQuestions from './pages/TeacherCreateQuestions';
import StudentQuiz from './pages/StudentQuiz';
import StudentSubmissions from './pages/StudentSubmissions';



function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Router>
          <Routes>
           
            <Route path='/' element={<Home />} />
            <Route path='/TeacherPage' element={<TeacherPage />} />
            <Route path='/TeacherCreateQuestions' element={<TeacherCreateQuestions />} />
            <Route path='/TeacherSubmission' element={<TeacherSubmission />} />
            <Route path='/StudentHome' element={<StudentHome />} />
            <Route path='/StudentQuiz' element={<StudentQuiz />} />
            <Route path='/StudentSubmissions' element={<StudentSubmissions />} />
            <Route path='/mathQuestions' element={<Quiz quizName="MathsQuiz"/>} />
            <Route path='/geographyQuestions' element={<Quiz quizName="GeographyQuiz "/>} />
            <Route path='/historyQuestions' element={<Quiz quizName="HistoryQuiz"/>} />
            <Route path='/scienceQuestions' element={<Quiz quizName="ScienceQuiz"/>} />
            
            {/* this is the route for the submission page */}
            <Route path='/geographySubmission' element={<Submission submissionName="GeographySubmissions"/>} />
            <Route path='/mathSubmission' element={<Submission submissionName="MathsSubmissions"/>} />
            <Route path='/historySubmission' element={<Submission submissionName="HistorySubmissions"/>} />
            <Route path='/scienceSubmission' element={<Submission submissionName="ScienceSubmissions"/>} />

          {/* this is the route for the review submission page */}
            <Route path='/reviewMathsSubmission' element={<ReviewSubmission submissionTableName="MathsSubmissions"/>} />
            <Route path='/reviewHistorySubmission' element={<ReviewSubmission submissionTableName="HistorySubmissions"/>} />
            <Route path='/reviewGeographySubmission' element={<ReviewSubmission submissionTableName="GeographySubmissions"/>} />
            <Route path='/reviewScienceSubmission' element={<ReviewSubmission submissionTableName="ScienceSubmissions"/>} />

            {/* this is the route for the create question page */}
            <Route path='/geographyQuestion' element={<CreateQuestion quizName="GeographyQuiz "/>} />
            <Route path='/mathQuestion' element={<CreateQuestion quizName="MathsQuiz"/>} />
            <Route path='/historyQuestion' element={<CreateQuestion quizName="HistoryQuiz"/>} />
            <Route path='/scienceQuestion' element={<CreateQuestion quizName="ScienceQuiz"/>} />


           
            
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;