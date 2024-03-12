import React from 'react'

const Questions = ({question, onAnswerClick=()=>{} }) => {
  return (
    <div className='questions'>
      <p className="question">
        {question.question}
      </p>
      <ul className='options'>
      {
            question.options.map((option) => {
                return(
                    <li key={option.text} className='option'>
                    <button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
                </li>

                )
                
            })
        }
      </ul>
    </div>
  )
}

export default Questions
