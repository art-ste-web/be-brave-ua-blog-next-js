import  { useState } from 'react';



export default function Quiz(props) {
//properties

const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = props.quest

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
        <h1 className=''>{props.quizHeader}</h1>
      {/* 2.Current score */}
        <h2 className=''>Правильних відповідей: {score}</h2>

      {showFinalResults ? (
        /* 4.Final results */
        <div className='quiz-results'>
          <h2>Результати тесту</h2>
          <p>{score} з {questions.length} вірно - ({(score/questions.length)*100}%)</p>
          <button onClick={() => restartGame()} className=''>Пройти ще раз</button>
        </div>
      ) : (
        /* 3.Qustion card */
        <div className='question-card'>
          <h4 className=''>Питання: {currentQuestion + 1} з {questions.length}</h4>
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

