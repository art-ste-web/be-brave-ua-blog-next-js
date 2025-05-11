import  { useState } from 'react';
import quest from '../quiz-quest/art-main-quest'


function Quiz() {
//properties

const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = quest

//helper functions

const optionClicked = (isCorrect) => {
  if(isCorrect){
    setScore(score + 1)
  }
  if(currentQuestion + 1 < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    setFinalResults(true)
  }
}

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResults(false);
}

  return (
    <div className="quiz-container">
      <section className=''>
      {/* 1.Header */}
        <h1 className=''>Test Quiz</h1>
      {/* 2.Current score */}
        <h2 className=''>Current Score: {score}</h2>

      {showFinalResults ? (
        /* 4.Final results */
        <div className='quiz-results'>
          <h2>Final results</h2>
          <p>{score} out of {questions.length} correct - ({(score/questions.length)*100}%)</p>
          <button onClick={() => restartGame()} className=''>Restart Quiz</button>
        </div>
      ) : (
        /* 3.Qustion card */
        <div className='question-card'>
          <h4 className=''>Question {currentQuestion + 1} of {questions.length}</h4>
          <h3 className=''>{questions[currentQuestion].text}</h3>

          <ul className=''>
            {questions[currentQuestion].options.map((option) =>{
                return (
                  <li onClick={() => optionClicked(option.isCorrect)} key={option.id} className=''>{option.text}</li>
                )
              })
            }
            
          </ul>
        </div>
      )}

      
      
      </section>
      
    </div>
  );
}

export default Quiz;