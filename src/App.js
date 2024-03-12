import React, { useState } from 'react';
import Questions from './Component/Questions';
import questions from "./Constants/questions.json"
import "./App.css"
import Results from './Component/Results';

const YourComponent = () => {
const [currentQuestion, setCurrentQuestion] = useState(0)
const [userAnswer, setUserAnswer] = useState([])


const onAnswerClick =(isCorrect) =>{
  setCurrentQuestion(currentQuestion+1)
  setUserAnswer([...userAnswer,isCorrect])

}

const resetQuiz = () => {
  setCurrentQuestion(0)
  setUserAnswer([])
}


  return (
 <div className='App'>
 <h1>Quiz....</h1>
 {
  currentQuestion < questions.length &&
  <Questions
 question={questions[currentQuestion]}
 onAnswerClick={onAnswerClick}
 />}

{ 
currentQuestion === questions.length &&
<Results
 questions= {questions}
 userAnswer={userAnswer}
 resetQuiz={resetQuiz}
 />}

 </div>
  );
};

export default YourComponent;
