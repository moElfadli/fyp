import React from "react";
import MultpleChoice from "./MultipleChoice";
import OneWord from "./OneWord";

const CreateQuestion = (props) => {
    
    return (
        <div>
    <MultpleChoice quizName={props.quizName}  />
    <OneWord quizName={props.quizName} />
    </div>
    );
    
    };
    export default CreateQuestion;
