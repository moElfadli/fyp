import { useState } from "react";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";


//this component is used to render the submission asnwers for each question
//it takes in the question id, the answer object and the doc id of the submission document
const TeacherReviewSubmissionAnswer = ({user, questionid, val, docid, quizName}) => {
  //this is the state that will hold the submission answers
  const [state, SetState] = useState({
    [questionid]: {
      question: val.question,
      answer: val.answer,
      score: val.score,
      feedback: val.feedback,
    },
  });


  //function for handling input state changes
  function handleChange(e) {
    //we get the name and value of the input that was changed
    const { name, value } = e.target;
    //we update the state with the new value
    let submission = { ...state[questionid], [name]: value };
    //we update the state with the new submission object
    SetState({ ...state, [questionid]: submission });
  }

  //function for handling submission
  function handleSubmit(e) {
    e.preventDefault();

    //this is the reference to the submission document using a variable with the quiz name and the submission id
    const submissionref = doc(db, "Quiz", quizName, "Submissions", docid);
    
    
    let updated_doc = {};

    //this is where we update the submission document with the new answers.
    //to update we need to get the document first and then update the fields we want to update
    getDoc(submissionref)
      .then((doc) => {
        //check if the document exists
        if (doc.exists()) {
          //get the document data
          updated_doc = doc.data();
          //update the document data with the new answers
          updated_doc[questionid] = state[questionid];
        }
      })
  
      .then(() => {
        //update the document in the database
        setDoc(submissionref, updated_doc)
          .then(() => {
            alert("Mark has been submitted");
          })
          //catch any errors
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      })
      
      //catch any errors
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  // this is checking if the score is not empty. If it is not empty, we do not render the component
  if (val.score !== "") {
    return null;
  }

  //render the component
  return (
    <div key={questionid} className="mt-[5rem] bg-white-200 p-4 flex flex-col">
      <div  className="mb-4">
        <div key={[docid]}  className="mb-4"></div>
        <h1 className="text-base md:font-bold">Student Name: {user?.name}</h1>
      <hr className="border-black-500" />
        <h1 className="text-2xl mt-10 font-medium">Question: {val.question}</h1>
        <h1 className="text-2xl font-medium">Answer: {val.answer}</h1>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-medium mr-">
          Score: {state[questionid].score}
        </h1>
        <input
          type="text"
          placeholder="score"
          className="w-1/2 h-10 px-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="score"
          value={state[questionid].score}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">
          Feedback: {state[questionid].feedback}
        </h1>
        <input
          type="text"
          placeholder="feedback"
          className="w-1/2 h-10 px-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="feedback"
          value={state[questionid].feedback}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TeacherReviewSubmissionAnswer;
