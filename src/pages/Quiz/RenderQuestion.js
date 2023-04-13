import React from "react";


// we use the variable question to render the question , score and question types
const Question = ({
  question,
  questionId,
}) => {
 
  // if the question type is ow then we render the open ended question
  if (question.questionType === "ow") {
    return (
      <div className='bg-white rounded-lg p-4 px-24"'>
        <h1 className="text-2xl font-bold mb-4 ml-6 ">{question.question}</h1>
        <h2 className="text-2xl font-bold mb-4 ml-6 ">{question.correctAnswer}</h2>
      </div>
    );
  }

  // if the question type is mc then we render the multiple choice question
  else if (question.questionType === "mc") {
    return (
      <div className="bg-white rounded-lg p-4 px-24">
        <h1 className="text-2xl font-bold mb-4">Question: {question.question}</h1>
        <h2 className="text-2xl font-bold mb-4">Option 1: {question.option1}</h2>
        <h2 className="text-2xl font-bold mb-4">Option 2: {question.option2}</h2>
        <h2 className="text-2xl font-bold mb-4">Option 3: {question.option3}</h2>
        <h2 className="text-2xl font-bold mb-4">Option 4: {question.option4}</h2>
        <h2 className="text-2xl font-bold mb-4">Correct Answer: {question.correctAnswer}</h2>

      </div>
    );
  }
};
export default Question;
