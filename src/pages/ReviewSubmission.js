import React from 'react';
import {useState,useEffect} from 'react'
import {doc, getDoc} from 'firebase/firestore';
import { db } from "../firebase-config";
import { UserAuth } from '../context/AuthContext';

// this is a functional component that takes in the submissionTableName as a prop 
const ReviewSubmission = ({submissionTableName}) => {
    
    const [Submission, SetSubmission] = useState([]);
    const { userRecord } = UserAuth();


    // useeffect is a hook that runs when the component is mounted 
    useEffect(() => {

        // this function that will fetch the submissions from the database
        const fetchData = async () => {
            //creating a reference to the user's document in the database
            const submissionRef = doc(db,submissionTableName,userRecord.id)
            //getting the user's document from the database

            const snapshot = await getDoc(submissionRef)

            if (snapshot.exists()) {
                SetSubmission(snapshot.data());
            } else {
                console.log("No such document!");
            }

        }

        fetchData();
    }, [submissionTableName,userRecord.id]); 
        

    return (
        <div>
            <h1>Review Submissions</h1>
            <div>
                {
                    // this is where we loop through the submissions object and render the submissions
                    Object.entries(Submission).map(([id_, submissionCollection]) => {
                        return (
                            renderSubmissions({id_,submissionCollection})
                        )
                    })
                }
            </div>
        </div>
    );
}

//this is where we use an if statement to check if the score and feedback are empty strings and if they are, we set them to "Score Pending..." and "Feedback Pending..."
function renderSubmissions({id_, submissionCollection}) {
    
    if(submissionCollection.score === ""){
        submissionCollection.score = "Score Pending..."
    }

    if(submissionCollection.feedback === ""){
        submissionCollection.feedback = "Feedback Pending..."
    }
    
    return (
        <div key ={id_}>
            <h1>Question: {submissionCollection.question}</h1>
            <h1>Answer: {submissionCollection.answer}</h1>
            <h1>Score: {submissionCollection.score} </h1>
            <h1>Feedback: {submissionCollection.feedback}</h1>
        </div>
    )
}

export default ReviewSubmission;