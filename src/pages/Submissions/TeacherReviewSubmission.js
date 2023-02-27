import { useState, useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import Answer from "./TeacherReviewSubmissionAnswer";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//The submission name parameter represents the name of the submission collection
const TeacherReviewSubmission = () => {
  const navigate = useNavigate();
  const {quizName} = useParams();
  
  // this is the state that will hold the submissions
  const [Submissions, SetSubmissions] = useState([]);
  // this is the state that will hold the users
  const [users, SetUser] = useState({});

  // this is the function that will fetch the submissions from the database when the component mounts
  useEffect(() => {

    // this function that will fetch all the users from the database
    const fetchAllUsers = async () => {
      const userRef = collection(db, "users");
      const snapshot = await getDocs(userRef);
      snapshot.forEach((doc) => {
        SetUser((users) => ({
          ...users,
          [doc.id]: doc.data(),
        }));
      });
    };

    // this function that will fetch the submissions from the database
    const fetchData = async () => {
      const submissionref = (collection(db, `Quiz/${quizName}/Submissions`));
      const snapshot = await getDocs(submissionref);
      //append each submission to the Submissions state with the doc id as the key
      snapshot.forEach((doc) => {
        SetSubmissions((Submissions) => [
          ...Submissions,
          { [doc.id]: doc.data() },
        ]);
      });
    };

   
    // this is where we call the function that will fetch the submissions from the database
    fetchData().catch((error) => {
      console.log(error);
    });
    fetchAllUsers().catch((error) => {
      console.log(error);
    });

    //TODO instead of getting all users from the database, we should only get the users that have submitted

 
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-20 px-4 sm:px-6 lg:px-8">
    <h1 className="text-6xl font-bold text-gray-800 p-4">Mark Questions</h1>
      {
        // this where we loop through the submissions array which contains all the submissions and their doc ids
        Submissions.map((submission, index) =>
          //this where we loop through each submission document and render it
          Object.entries(submission).map(([docid, value]) => {
            let user = users[docid];
            return (
              //render each question/answer collection
              renderSubmissions({ index, docid, value, quizName, user })
            );
          })
        )
      }
      <button
        className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
        onClick={() => navigate(`/ShowQuestions/${quizName}`)}
      >
        Back
      </button>
      <br />
    </div>
  );
};


//this is where we loop through each question/answer collection in the submission document
function renderSubmissions({ index, docid, value, quizName, user }) {
  return (
    <div>
      {Object.entries(value).map(([questionid, val]) => {
        return (
          <Answer
            key={index}
            user={user}
            questionid={questionid}
            val={val}
            docid={docid}
            quizName={quizName}
          />
        );
      })}
    </div>
  );
}

export default TeacherReviewSubmission;
