import React from "react";

function AnswerA({ nextQuestion, setAnswer, questionId, currentAnswer }) {
  return (
    <div>
      <div
        style={{
          margin: "4px",
          cursor: "pointer",
          border: "1px solid white",
          padding: "16px 40px",
          borderRadius: 10,
        }} // 추가된 key prop
        className={currentAnswer === "O" ? "selected" : ""}
        onClick={() => {
          setAnswer(questionId, "O");
          nextQuestion();
        }}
      >
        O
      </div>
      <div
        style={{
          margin: "4px",
          cursor: "pointer",
          border: "1px solid white",
          padding: "16px 40px",
          marginBottom: 100,
          borderRadius: 10,
        }} // 추가된 key prop
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

// <div
//   className={currentAnswer === "O" ? "selected" : ""}
//   onClick={() => {
//     setAnswer(questionId, "O");
//     nextQuestion();
//   }}
// >
//   O
// </div>
// <div
//   className={currentAnswer === "X" ? "selected" : ""}
//   onClick={() => {
//     setAnswer(questionId, "X");
//     nextQuestion();
//   }}
// >
//   X
// </div>
