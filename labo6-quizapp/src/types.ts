import React from "react"

interface quiz{
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[],
    user_answer?:string
  }

export default quiz