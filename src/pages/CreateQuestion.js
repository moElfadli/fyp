import React from "react";
import MultpleChoice from "./MultipleChoice";
import OneWord from "./OneWord";

const CreateQuestion = (props) => {
  return (
    <div>
      {/* // this is where we pass the quizName prop to the MultipleChoice and OneWord components so we can use it in those components */}
      <MultpleChoice quizName={props.quizName} />
      <OneWord quizName={props.quizName} />
    </div>
  );
};
export default CreateQuestion;
