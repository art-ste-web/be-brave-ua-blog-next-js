import { useState } from "react"


export default function QuizApp(props) {

    const [showQuizResults, setQuizResults] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerClicked, setAnswerClicked] = useState(false)

    const [toggleClass, setToggleClass] = useState(false)

    const questions = [
        {
          text: "What is the capital of America?",
          options: [
            { id: 0, text: "New York City", isCorrect: false },
            { id: 1, text: "Boston", isCorrect: false },
            { id: 2, text: "Santa Fe", isCorrect: false },
            { id: 3, text: "Washington DC", isCorrect: true },
          ],
        },
        {
          text: "What year was the Constitution of America written?",
          options: [
            { id: 0, text: "1787", isCorrect: true },
            { id: 1, text: "1776", isCorrect: false },
            { id: 2, text: "1774", isCorrect: false },
            { id: 3, text: "1826", isCorrect: false },
          ],
        },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
      ];
    
    //helper functions

    const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score+1)
            setAnswerClicked(true)
            setToggleClass(true)
        }
        else setAnswerClicked(true)
      
     
    }

    const nextQuestion = () => {
      if(currentQuestion+1 < questions.length) {
        setCurrentQuestion(currentQuestion+1)
        setAnswerClicked(false)
      }
      else setQuizResults(true)
    }

    const restartQuiz = () => {
        setScore(0)
        setCurrentQuestion(0)
        setQuizResults(false)
    }

    return(
        <div className="quiz-container">
            {/* header */}
            <h1>Quiz</h1>
            <h2>Current score: {score}</h2>

            { showQuizResults ? (
                            
                <div className="quiz-results">
                    <h2>Final results</h2>
                    <h3>
                        {score} out of {questions.length} correct ({(score/questions.length)*100}%)
                    </h3>
                    <button onClick={() => restartQuiz()}>Restart Quiz</button>
                </div>
            )
            :
            (
                <div className="question-card">
                    <p>Question {currentQuestion+1} out of {questions.length}</p>
                    <h2>{questions[currentQuestion].text}</h2>
                    <ul>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li className={toggleClass ? 'correct-answer' : ''}
                                 onClick={() => {
                                  answerClicked ? console.log('stop') : optionClicked(option.isCorrect)
                                  
                                } } key={option.id}>{option.text}</li>
                            )
                        } )}
                    </ul>
                    <button onClick={() => nextQuestion()}>Next Question</button>
                </div>
            )
            }
           
        </div>
    )
}