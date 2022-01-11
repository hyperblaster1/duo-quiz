import React from 'react'

function StarterScreen1({questionCount1, setQuestionCount1, maxNum1, setMaxNum1, setQuiz1Status}) {
  return (
    <>
      <h2 className='text-2xl my-4 w-1/2 text-center mx-auto'>Quiz 1</h2>
      <input
        type='number'
        min='1'
        max='30'
        className='w-full border-2 my-4 h-12 px-6'
        placeholder='Enter number of questions you want to answer'
        value={questionCount1}
        onChange={e => setQuestionCount1(e.target.value)}
      />
      <input
        type='number'
        min='1'
        max='99'
        className='w-full border-2 my-4 h-12 px-6'
        placeholder='Enter maximum number(<99) you want in problem statement'
        value={maxNum1}
        onChange={e => setMaxNum1(e.target.value)}
      />
      <div className='mx-auto flex justify-center my-4'>
        {!(questionCount1 && maxNum1) && (
          <button className='bg-gray-500 p-3 w-1/2 font-bold text-gray-800 cursor-not-allowed'>
            Start Quiz
          </button>
        )}
        {questionCount1 && maxNum1 && (
          <button className='bg-green-500 p-3 w-1/2 font-bold' onClick={() => setQuiz1Status(true)}>
            Start Quiz
          </button>
        )}
      </div>
    </>
  )
}

export default StarterScreen1
