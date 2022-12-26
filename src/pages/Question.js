import React from 'react';
import {useState} from 'react'


// we use the variable question to render the question , score and question types
const Question = ({question, questionId, SetAnswerSubmissions, AnswerSubmissions}) => {

  //this is the state that will hold the submission answers
  const [checkedAnswer, setCheckedAnswer] = useState("");


//function for handling input state changes
function handleChange(e){
  
  //we get the name and value of the input that was changed
  const {name, value} = e.target;
  
   //This is the object that will store all the form data
    //we make a object with defualt data (empty fields)
    const Answer = {
      question: question.question,
      answer: value,
      feedback : "",
      score : "",
  }

  //we update the state with the new value and the new submission object 
 SetAnswerSubmissions({...AnswerSubmissions, [name]: Answer})
  

  //im gonna make a console log to see the state changes
  //will delte this after
  // console.log(answerSubmission);
  console.log(AnswerSubmissions);
      
}

  if (question.questionType === 'ow') {
    return (
      <div className='questionStyle'>

        <h1>{question.question}</h1>
           {/* adding styling to inputs */}
           <div className="mb-4">
                {/* adding label */}
                <label className="form-label">
                   Answer*
                </label>
                {/* Input handles state change*/}
                <input type="text" placeholder="Answer" className="w-1/2 h-10 px-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name= {questionId}
                value={AnswerSubmissions.questionId}
                onChange={(e) => handleChange(e)
                }
                />
            </div>
      </div>
    );
  }

  
  else if (question.questionType === 'mc') {
    return (
      <div className='questionStyle'>
        <form>
          <h1>{question.question}</h1>

          <label>{question.option1}</label>
          <input type="radio" name= {questionId} value={question.option1} onChange={(e) => {handleChange(e); setCheckedAnswer(e.target.value)}} checked={checkedAnswer === question.option1}/>
          
          <label>{question.option2}</label>
          <input type="radio" name= {questionId} value={question.option2} onChange={(e) => {handleChange(e); setCheckedAnswer(e.target.value)}} checked={checkedAnswer === question.option2}/>
          
          <label>{question.option3}</label>
          <input type="radio" name= {questionId} value={question.option3} onChange={(e) => {handleChange(e); setCheckedAnswer(e.target.value)}} checked={checkedAnswer === question.option3}/>
          
          <label>{question.option4}</label>
          <input type="radio" name= {questionId} value={question.option4} onChange={(e) => {handleChange(e); setCheckedAnswer(e.target.value)}} checked={checkedAnswer === question.option4}/>
        </form>
        
      </div>
    );
  }
};
export default Question;
