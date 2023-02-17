import React from "react";
import AddMultpleChoice from "./AddMultipleChoice";
import AddOneWord from "./AddOneWord";

const CreateQuestions = (props) => {
  return (
    <div>
      {/* // this is where we pass the quizName prop to the MultipleChoice and OneWord components so we can use it in those components */}
      <AddMultpleChoice quizName={props.quizName} />
      <AddOneWord quizName={props.quizName} />
    </div>
  );
};
export default CreateQuestions;
