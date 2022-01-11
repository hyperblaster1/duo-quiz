import React, {useState} from 'react'

function Quiz1({question, submitAnswer2, correctAnswers2, questionCount2}) {
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
                submitAnswer2(userAnswer)
                setUserAnswer('')
              }}>
              Next {correctAnswers2 + '/' + questionCount2}
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Quiz1
