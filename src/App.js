import logo from './logo.svg';
import './App.css';
import { Quizdata } from './data/Quizdata';
import { useState } from 'react';


function App() {

  const [currentQsn, nextQsn] = useState(0)

  const handleNextQsn = () =>{
    if(currentQsn< Quizdata.length-1){
    nextQsn(currentQsn + 1)
    } else {
      alert("You have reched the end.")
    }
  }


  
  return (
    <>
    <div className="wrapper">
      <div className="quiz">

        <div className="qsn">
          <span className='span'>{Quizdata[currentQsn].id}.</span>
          <span>{Quizdata[currentQsn].Question}</span>
        </div>
         
         
        <div className='contain-option'>
        <h4>options</h4>

        {Quizdata[currentQsn].option.map((option, i)=>{
         return (<div key={i} className="option">
          <span>{i+1}. </span>
          <span>{option}</span>
        </div>
         )
        })}

        

        </div>
        <div className='contain-btn'>
        <button className='btn' onClick={handleNextQsn}>Next</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
