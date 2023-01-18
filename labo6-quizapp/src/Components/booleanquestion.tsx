import React, { useState } from "react";
import quiz from "../types";

interface boolQuestionProps {
  question: quiz;
  setUserAnswer:(answer:string)=>void
}

const Boolquestion = ({ question,setUserAnswer }: boolQuestionProps) => {

  return (
    <div>
        <input type="radio" name={question.question} onChange={(e)=>setUserAnswer("True")}/>true
        <input type="radio" name={question.question} onChange={(e)=>setUserAnswer("False")}/>false
    </div>
  );
};

export default Boolquestion;
