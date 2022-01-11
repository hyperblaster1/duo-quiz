import React, {useState, useEffect} from 'react'
import StarterScreen1 from './components/StarterScreen1'
import StarterScreen2 from './components/StarterScreen2'
import './App.css'
import Quiz1 from './components/Quiz1'
import Quiz2 from './components/Quiz2'

function App() {
  const [quiz1Status, setQuiz1Status] = useState(false)
  const [questionCount1, setQuestionCount1] = useState('')
  const [maxNum1, setMaxNum1] = useState('')
  const [questionList1, setQuestionList1] = useState([])
  const [currentQuesIndex1, setCurrentQuesIndex1] = useState(0)
  const [answerArray1, setAnswerArray1] = useState([])
  const [correctAnswers1, setCorrectAnswers1] = useState(0)
  const [resultsSheet1, setResultsSheet1] = useState([])

  const [quiz2Status, setQuiz2Status] = useState(false)
  const [questionCount2, setQuestionCount2] = useState('')
  const [maxNum2, setMaxNum2] = useState('')
  const [questionList2, setQuestionList2] = useState([])
  const [currentQuesIndex2, setCurrentQuesIndex2] = useState(0)
  const [answerArray2, setAnswerArray2] = useState([])
  const [correctAnswers2, setCorrectAnswers2] = useState(0)
  const [resultsSheet2, setResultsSheet2] = useState([])

  const submitAnswer1 = answer => {
    let _answerElement = ''
    if (answerArray1[currentQuesIndex1] === Number(answer)) {
      setCorrectAnswers1(correctAnswers1 + 1)
      _answerElement = `<div class='text-2xl'>${questionList1[currentQuesIndex1]
        .toString()
        .replaceAll(',', ' ')} Answer-${answer} </div>`
    } else
      _answerElement = `<div class='text-2xl text-red-400'>${questionList1[currentQuesIndex1]
        .toString()
        .replaceAll(',', ' ')} INCORRECT Answer-${answerArray1[currentQuesIndex1]} </div>`
    setResultsSheet1(prevState => [...prevState, _answerElement])
    setCurrentQuesIndex1(currentQuesIndex1 + 1)
  }

  const submitAnswer2 = answer => {
    let _answerElement = ''
    if (answerArray2[currentQuesIndex2] === Number(answer)) {
      setCorrectAnswers2(correctAnswers2 + 1)
      _answerElement = `<div class='text-2xl'>${questionList2[currentQuesIndex2]
        .toString()
        .replaceAll(',', ' ')} Answer-${answer} </div>`
    } else
      _answerElement = `<div class='text-2xl text-red-400'>${questionList2[currentQuesIndex2]
        .toString()
        .replaceAll(',', ' ')} INCORRECT Answer-${answerArray2[currentQuesIndex2]} </div>`
    setResultsSheet2(prevState => [...prevState, _answerElement])
    setCurrentQuesIndex2(currentQuesIndex2 + 1)
  }

  useEffect(() => {
    if (quiz1Status) {
      let _quizArray = []
      let _answerArray = []
      for (let i = 0; i < questionCount1; i++) {
        let _pair = []
        let operands = ['+', '-', '*', '/']
        _pair = [
          Math.floor(Math.random() * (Number(maxNum1) + 1)),
          operands[Math.floor(Math.random() * 4)],
          Math.floor(Math.random() * (Number(maxNum1) + 1)),
        ]
        _quizArray.push(_pair)
        switch (_pair[1]) {
          case '+':
            _answerArray.push(Number(_pair[0]) + Number(_pair[2]))
            break
          case '-':
            _answerArray.push(Number(_pair[0]) - Number(_pair[2]))
            break
          case '*':
            _answerArray.push(Number(_pair[0]) * Number(_pair[2]))
            break
          case '/':
            _answerArray.push((Number(_pair[0]) / Number(_pair[2])).toFixed(2))
            break
        }
      }
      setQuestionList1([..._quizArray])
      setAnswerArray1([..._answerArray])
    }
  }, [quiz1Status])

  useEffect(() => {
    if (quiz2Status) {
      let _quizArray = []
      let _answerArray = []
      for (let i = 0; i < questionCount2; i++) {
        let _pair = []
        let operands = ['+', '-', '*', '/']
        _pair = [
          Math.floor(Math.random() * (Number(maxNum2) + 1)),
          operands[Math.floor(Math.random() * 4)],
          Math.floor(Math.random() * (Number(maxNum2) + 1)),
        ]
        _quizArray.push(_pair)
        switch (_pair[1]) {
          case '+':
            _answerArray.push(Number(_pair[0]) + Number(_pair[2]))
            break
          case '-':
            _answerArray.push(Number(_pair[0]) - Number(_pair[2]))
            break
          case '*':
            _answerArray.push(Number(_pair[0]) * Number(_pair[2]))
            break
          case '/':
            _answerArray.push((Number(_pair[0]) / Number(_pair[2])).toFixed(2))
            break
        }
      }
      setQuestionList2([..._quizArray])
      setAnswerArray2([..._answerArray])
    }
  }, [quiz2Status])

  return (
    <div className='flex w-1/1 items-center'>
      <div className='p-6 w-1/2 h-screen flex-col items-center border-2'>
        {!quiz1Status && (
          <StarterScreen1
            questionCount1={questionCount1}
            setQuestionCount1={setQuestionCount1}
            maxNum1={maxNum1}
            setMaxNum1={setMaxNum1}
            setQuiz1Status={setQuiz1Status}
          />
        )}
        {quiz1Status && currentQuesIndex1 !== questionList1.length && (
          <Quiz1
            question={questionList1[currentQuesIndex1]}
            submitAnswer1={submitAnswer1}
            correctAnswers1={correctAnswers1}
            questionCount1={questionCount1}
          />
        )}
        {currentQuesIndex1 === questionList1.length &&
          resultsSheet1.map((item, index) => (
            <div key={index} dangerouslySetInnerHTML={{__html: item}}></div>
          ))}
      </div>
      <div className='p-6 w-1/2 h-screen flex-col items-center'>
        {!quiz2Status && (
          <StarterScreen2
            questionCount2={questionCount2}
            setQuestionCount2={setQuestionCount2}
            maxNum2={maxNum2}
            setMaxNum2={setMaxNum2}
            setQuiz2Status={setQuiz2Status}
          />
        )}
        {quiz2Status && currentQuesIndex2 !== questionList2.length && (
          <Quiz2
            question={questionList2[currentQuesIndex2]}
            submitAnswer2={submitAnswer2}
            correctAnswers2={correctAnswers2}
            questionCount2={questionCount2}
          />
        )}
        {currentQuesIndex2 === questionList2.length &&
          resultsSheet2.map((item, index) => (
            <div key={index} dangerouslySetInnerHTML={{__html: item}}></div>
          ))}
      </div>
    </div>
  )
}

export default App
