import React from 'react'

const Results = ({questions, userAnswer, resetQuiz =() => {}}) => {

    const correctAnswers = userAnswer.filter((answer) => answer).length 
  return (
    <div className='results'>
        <h2>You answered {correctAnswers} out of {questions.length}</h2>
        <span onClick={resetQuiz} style={{color:"red", textDecoration:"underline", cursor:"pointer"}}>Retry the quiz</span>
      <div>
        <ul className="result">
            
            {
                questions.map((question,index) => {
                    const correctAnswer = question.options.find((option) => option.isCorrect)
                    return (
                        <li key={index} data-correct={userAnswer[index]}>
                            Q{index + 1}. {question.question}
                            <br />
                            <span style={{color: "green", marginTop: "10px"}}>Correct Answer: {correctAnswer.text}</span>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </div>
  )
}

export default Results
