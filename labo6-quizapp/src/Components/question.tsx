import React from "react"
import quiz from "../types"
import Boolquestion from "./booleanquestion"
import Multiquestion from "./multiplequestion"

interface quizProps{
    question:quiz 
    setUseranswer: (answer:string)=>void
}

const Question=({question,setUseranswer}:quizProps)=>{
    let color = "white"
    if (question.user_answer !== undefined) {
        if (question.user_answer == question.correct_answer) {
            color = "green"
        }else{
            color = "red"
        }
    }

    return (
        <div style={{backgroundColor:color}}>
            <div>
                {question.question}
            </div>
            {question.user_answer === undefined &&<div>
                {question.type ==="boolean" && <Boolquestion question ={question} setUserAnswer={setUseranswer}/>}
                {question.type ==="multiple" && <Multiquestion question={question} setUserAnswer={setUseranswer}/>}
            </div>}
            {question.user_answer&& 
            <div>
                {question.user_answer === question.correct_answer &&<div>you have answered correctly</div>}
                {question.user_answer !== question.correct_answer &&<div>you answered {question.user_answer} and the correct answer was {question.correct_answer}</div>}
                
            </div>}
            </div>
    )
}



export default Question