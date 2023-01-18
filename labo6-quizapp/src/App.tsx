import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import quiz from "./types";
import Question from "./Components/question";
import Loading from "./Components/LoadingIndicator";

interface details {
  response_code: Number;
  results: quiz[];
}

const Quizapp = () => {
  const [quiz, setquiz] = useState<quiz[]>([]);
  const [loading,setloading]=useState(false);


  const fetchfunction = async () => {
    setloading(true)
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let data: details = await response.json();
    setquiz([...quiz, ...data.results]);
    setloading(false)
  };

  useEffect(() => {
    fetchfunction();
  }, []);

  const setUserAnswer = (answer: string, index: number) => {
    setquiz(
      quiz.map((e, i) => (index === i ? { ...e, user_answer: answer } : e))
    );
  };

  return (
    <div>
      <div>{loading && <Loading/>}</div>
      <div style={{ backgroundColor: "" }}>
        <ul>
          {quiz.map((e, i) => (
            <Question
              question={e}
              setUseranswer={(answer) => setUserAnswer(answer, i)}
            />
          ))}
        </ul>
        <button onClick={fetchfunction}> show more</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Quizapp />
    </div>
  );
}

export default App;
