import React from 'react'

function StarterScreen2({questionCount2, setQuestionCount2, maxNum2, setMaxNum2, setQuiz2Status}) {
  return (
    <>
      <h2 className='text-2xl my-4 w-1/2 text-center mx-auto'>Quiz 2</h2>
      <input
        type='number'
        min='1'
        max='30'
        className='w-full border-2 my-4 h-12 px-6'
        placeholder='Enter number of questions you want to answer'
        value={questionCount2}
        onChange={e => setQuestionCount2(e.target.value)}
      />
      <input
        type='number'
        min='1'
        max='99'
        className='w-full border-2 my-4 h-12 px-6'
        placeholder='Enter maximum number(<99) you want in problem statement'
        value={maxNum2}
        onChange={e => setMaxNum2(e.target.value)}
      />
      <div className='mx-auto flex justify-center my-4'>
        {!(questionCount2 && maxNum2) && (
          <button className='bg-gray-500 p-3 w-1/2 font-bold text-gray-800 cursor-not-allowed'>
            Start Quiz
          </button>
        )}
        {questionCount2 && maxNum2 && (
          <button className='bg-green-500 p-3 w-1/2 font-bold' onClick={() => setQuiz2Status(true)}>
            Start Quiz
          </button>
        )}
      </div>
    </>
  )
}

export default StarterScreen2
