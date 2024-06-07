import React from "react";

function AnswerA({ nextQuestion, setAnswer, questionId, currentAnswer }) {
  return (
    <div>
      <div
        className={currentAnswer === "O" ? "selected" : ""}
        onClick={() => {
          setAnswer(questionId, "O");
          nextQuestion();
        }}
      >
        O
      </div>
      <div
        className={currentAnswer === "X" ? "selected" : ""}
        onClick={() => {
          setAnswer(questionId, "X");
          nextQuestion();
        }}
      >
        X
      </div>
    </div>
  );
}

export default AnswerA;
