import React, {useState} from 'react'

function Quiz1({question, submitAnswer1, correctAnswers1, questionCount1}) {
  const [userAnswer, setUserAnswer] = useState('')

  return (
    <>
      {!!question && (
        <>
          <div className='text-4xl text-center'>
            {question[0]}
            {question[1]}
            {question[2]}
          </div>
          <input
            type='text'
            value={userAnswer}
            className='w-full border-2 my-4 h-12 px-6'
            placeholder='Enter your answer'
            onChange={e => setUserAnswer(e.target.value)}
          />
          <div className='w-full mx-auto flex justify-center my-20'>
            <button
              className='bg-blue-400 p-3 w-1/2 font-bold'
              onClick={() => {
                submitAnswer1(userAnswer)
                setUserAnswer('')
              }}>
              Next {correctAnswers1 + '/' + questionCount1}
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Quiz1
