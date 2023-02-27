import React from "react";
import { useState } from "react";

// we use the variable question to render the question , score and question types
const Question = ({
  question,
  questionId,
  SetAnswerSubmissions,
  AnswerSubmissions,
}) => {
  console.log(question);
  //this is the state that will hold the submission answers
  const [checkedAnswer, setCheckedAnswer] = useState("");

  //function for handling input state changes
  function handleChange(e) {
    //we get the name and value of the input that was changed
    const { name, value } = e.target;

    //This is the object that will store all the form data
    //we make a object with defualt data (empty fields)
    const Answer = {
      question: question.question,
      answer: value,
      feedback: "",
      score: "",
    };

    //we update the state with the new value and the new submission object
    SetAnswerSubmissions({ ...AnswerSubmissions, [name]: Answer });
  }

  // if the question type is ow then we render the open ended question
  if (question.questionType === "ow") {
    return (
      <div className=' rounded-lg p-6"'>
        <h1 className="text-2xl font-bold mb-4 ml-6 ">{question.question}</h1>
        {/* adding styling to inputs */}
        <div className="mb-4  ">
          {/* adding label */}
          <label className="block mb-2 font-bold text-xl "></label>
          {/* Input handles state change*/}
          <input
            type="text"
            placeholder="Answer"
            className="w-1/2 h-10 px-2 border-2  rounded-lg focus:outline-none focus:border-blue-500  p-6 ml-4"
            name={questionId}
            value={AnswerSubmissions.questionId}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    );
  }

  // if the question type is mc then we render the multiple choice question
  else if (question.questionType === "mc") {
    return (
      <div className=" rounded-lg  p-6">
        <h1 className="text-2xl font-bold mb-4">{question.question}</h1>

        <form>
          <label className="block mb-2 font-bold text-xl">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name={questionId}
              value={question.option1}
              onChange={(e) => {
                handleChange(e);
                setCheckedAnswer(e.target.value);
              }}
              checked={checkedAnswer === question.option1}
            />
            {question.option1}
          </label>

          <label className="block mb-2 font-bold text-xl">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name={questionId}
              value={question.option2}
              onChange={(e) => {
                handleChange(e);
                setCheckedAnswer(e.target.value);
              }}
              checked={checkedAnswer === question.option2}
            />
            {question.option2}
          </label>

          <label className="block mb-2 font-bold text-xl">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name={questionId}
              value={question.option3}
              onChange={(e) => {
                handleChange(e);
                setCheckedAnswer(e.target.value);
              }}
              checked={checkedAnswer === question.option3}
            />
            {question.option3}
          </label>

          <label className="block mb-2 font-bold text-xl">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name={questionId}
              value={question.option4}
              onChange={(e) => {
                handleChange(e);
                setCheckedAnswer(e.target.value);
              }}
              checked={checkedAnswer === question.option4}
            />
            {question.option4}
          </label>
        </form>
      </div>
    );
  }
};
export default Question;
