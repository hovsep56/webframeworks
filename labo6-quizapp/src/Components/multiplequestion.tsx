import React, { useState } from "react";
import quiz from "../types";

interface multiQuestionProps {
  question: quiz;
  setUserAnswer:(answer:string)=>void
}

//made this function so answers would not sort after every selection by placing it in a state.
const sortAnswers=(correctAnswer:string,wrongAnswers:string[])=>{
    //use this line to combine two of the same class properties togheter, use "..." when it's an array.
    let allanswers=[...wrongAnswers, correctAnswer]
    allanswers.sort((a,b)=>Math.random() -0.5)
    return allanswers
}

const Multiquestion = ({ question,setUserAnswer }: multiQuestionProps) => {
    const [allAnswers,setAllAnswers]=useState(sortAnswers(question.correct_answer,question.incorrect_answers))
    
  return (

    <select onChange={(e)=>setUserAnswer(e.target.value)}>
        <option value="">select an answer</option>
      {allAnswers.map((e,i) => (
        <option key={i} value={e}>{e}</option>
      ))}
    </select>
  );
};

export default Multiquestion