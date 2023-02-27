import React from "react";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// this is a functional component that takes in the submissionTableName as a prop
const StudentReviewSubmission = () => {
  const { quizName } = useParams();
  // this is the state that will hold the submission answers
  const [Submission, SetSubmission] = useState([]);
  // here we are using the UserAuth context to get the current user
  const { userRecord } = UserAuth();
  const navigate = useNavigate();

  // useeffect is a hook that runs when the component is mounted
  useEffect(() => {
    // this function that will fetch the submissions from the database
    const fetchData = async () => {
      //creating a reference to the user's document in the database
      const submissionRef = doc(db, "Quiz", quizName, "Submissions", userRecord.id);
      //getting the user's document from the database

      const snapshot = await getDoc(submissionRef);

      if (snapshot.exists()) {
        SetSubmission(snapshot.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [userRecord.id]);

  return (
    <div className="min-h-screen bg-gray-100 mt-20 px-4 ">
      <h1 className="text-6xl font-bold text-gray-800 p-4 text-center">
        Review Submissions
      </h1>
      <br />
      <div>
        {
          // this is where we loop through the submissions object and render the submissions
          Object.entries(Submission).map(([id_, submissionCollection]) => {
            return renderSubmissions({ id_, submissionCollection });
          })
        }
        <button
          className="btnBack rounded-full py-2 px-10 hover:bg-red-dark fixed bottom-8 right-4 p-4"
          onClick={() => navigate("/StudentHomePage")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

//this is where we use an if statement to check if the score and feedback are empty strings and if they are, we set them to "Score Pending..." and "Feedback Pending..."
function renderSubmissions({ id_, submissionCollection }) {
  if (submissionCollection.score === "") {
    submissionCollection.score = "Pending...";
  }

  if (submissionCollection.feedback === "") {
    submissionCollection.feedback = "Pending...";
  }

  return (
    // key is a react prop that is used to identify each child in a list and in this case, we are using the id_ as the key
    <div key={id_}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-medium ">
          Question: {submissionCollection.question}
        </h1>

        <p className="text-black mb-4">Your answer:</p>
        <p className="text-black mb-4">{submissionCollection.answer}</p>

        <hr className="border-black-200" />
        <div className="flex items-center mb-4">
          <h1 className="text-lg font-medium text-orange-500 mr-2">
            Score: {submissionCollection.score}{" "}
          </h1>
        </div>

        <p className="text-black mb-4">
          Feedback: {submissionCollection.feedback}
        </p>
      </div>
    </div>
  );
}

export default StudentReviewSubmission;
