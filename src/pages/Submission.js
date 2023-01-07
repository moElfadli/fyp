import {useState,useEffect} from 'react'
import {getDocs,collection, query} from 'firebase/firestore';
import { db } from "../firebase-config";
import Answer from './Answer';
import { useNavigate } from 'react-router-dom';


//this is the component that will render the submissions. 
//The submission name represents the name of the submission collection
const Submission = ({submissionName}) => {
    const navigate = useNavigate();

// this is the state that will hold the submissions
const [Submissions, SetSubmissions] = useState([]);

// this is the function that will fetch the submissions from the database when the component mounts
useEffect(() => {

    // this function that will fetch the submissions from the database
    const fetchData = async () => {
    const submissionref = query(collection(db, submissionName));
    const snapshot = await getDocs(submissionref);
    //append each submission to the Submissions state with the doc id as the key
        snapshot.forEach((doc) => {
        SetSubmissions(Submissions => [...Submissions, {[doc.id]: doc.data()}]);
    });}

    // this is where we call the function that will fetch the submissions from the database
        fetchData()
        .catch((error) => {
        console.log(error);
        });
    }, [submissionName]);



return (
    <div className="sumbissionStyle">
    {
    // this where we loop through the submissions array which contains all the submissions and their doc ids
    Submissions.map((submission, index) => (
        //this where we loop through each submission document and render it
        Object.entries(submission).map(([docid, value]) => {
            return (
                //render each question/answer collection
                renderSubmissions({index,docid,value,submissionName})
            )
        })
    ))}
     <button className="btn7 btn-red" onClick={() => navigate("/TeacherPage")}>
          Back
        </button>
    </div>
);
}

//this is where we loop through each question/answer collection in the submission document
function renderSubmissions({index,docid,value,submissionName}) {
    return (
        <div>
           {  
            Object.entries(value).map(([questionid, val]) => {
                return (
                    <Answer key={index} questionid={questionid} val={val} docid={docid} submissionName={submissionName}/>
                )
                })  
            }
            
        </div>

        
    )
}


export default Submission;