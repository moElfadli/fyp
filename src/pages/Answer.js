import React from 'react';
import {useState} from 'react';
import {setDoc, getDoc,doc} from 'firebase/firestore';
import { db } from "../firebase-config";

//this component is used to render the submission asnwers for each question
//it takes in the question id, the answer object and the doc id of the submission document
const Answer = ({questionid, val, docid, submissionName}) => {

    //this is the state that will hold the submission answers
    const [state, SetState] = useState({[questionid]: {question: val.question, answer: val.answer, score: val.score, feedback: val.feedback}});

    //function for handling input state changes
    function handleChange(e){
        //we get the name and value of the input that was changed
        const {name, value} = e.target;
        //we update the state with the new value
        let submission = {...state[questionid], [name]: value}
        //we update the state with the new submission object
        SetState({...state, [questionid]: submission})
    }

    //function for handling submission
    function handleSubmit(e){
        e.preventDefault();

        //this is the reference to the submission document using a variable with the quiz name and the submission id
        const submissionref = doc(db, submissionName, docid);
        

        let updated_doc = {}

        //this is where we update the submission document with the new answers. 
        //to update we need to get the document first and then update the fields we want to update
        getDoc(submissionref).then((doc) => {
            //check if the document exists
            if (doc.exists()) {
                //get the document data
                updated_doc = doc.data()
                //update the document data with the new answers
                updated_doc[questionid] = state[questionid] 
            }})
            .then(() => {
                //update the document in the database
                setDoc(submissionref, updated_doc).then(() => {
                    console.log("Document successfully written!");
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
    if (val.score !== ""){
        return (null)
    }

    //render the component
    return (
        // this removes the warning from mapping the component
        <div key={questionid}>
            <h2>Mark Questions</h2>
            <h1>Question: {val.question}</h1>

            <h1>Answer: {val.answer}</h1>

            {/* this state is used to allow the teacher to chnage the score and see the change as they type */}
            <h1>Score: {state[questionid].score}</h1>
            <input type="text" placeholder="score" className="w-1/2 h-10 px-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="score" value={state[questionid].score} onChange={(e) => handleChange(e)}/>

            <h1>Feedback: {state[questionid].feedback}</h1>
            <input type="text" placeholder="feedback" className="w-1/2 h-10 px-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="feedback" value={state[questionid].feedback} onChange={(e) => handleChange(e)}/>

            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )

}

export default Answer;