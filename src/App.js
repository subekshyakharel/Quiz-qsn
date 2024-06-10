import logo from './logo.svg';
import './App.css';
import { Quizdata } from './data/Quizdata';
import { useState } from 'react';
import QuizResult from './data/QuizResult';


function App() {

  const [currentQsn, nextQsn] = useState(0);
  const [score, setScore] = useState(0); 
  const [clickedOption, setClicked] = useState(0)
  const [showResult, setShowresult] = useState(false)

  const handleNextQsn = () =>{
    updateScore()
    if(currentQsn< Quizdata.length-1){
    nextQsn(currentQsn + 1)
    setClicked(0);
    } else {
      setShowresult(true)
    }
  }

  const updateScore =() =>{
    if(clickedOption === Quizdata[currentQsn].answer){
      setScore(score +1)
    }
  }

  
  return (
    <>
    <div className="wrapper">
      <div className="quiz">
       {
        showResult ? (
          <QuizResult score = {score} totalScore = {Quizdata.length} />
        ) : (
          <>
        <div className="qsn">
          <span className='span'>{Quizdata[currentQsn].id}.</span>
          <span>{Quizdata[currentQsn].Question}</span>
        </div>
         
         
        <div className='contain-option'>
        <h4>options</h4>

        {Quizdata[currentQsn].option.map((option, i)=>{
         return (<div key={i} className={`option ${clickedOption === (i+1)? "checked" : null}`} onClick={()=>setClicked(i+1)}>
          <span>{i+1}. </span>
          <span>{option}</span>
        </div>
         )
        })}

        

        </div>
        <div className='contain-btn'>
        <button className='btn' onClick={handleNextQsn}>Next</button>
        </div>
        </>
        )
      }
      </div>
    </div>
    </>
  );
}

export default App;
