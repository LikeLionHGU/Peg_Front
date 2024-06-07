import React from "react";

function AnswerC({ nextQuestion, setAnswer, questionId, currentAnswer }) {
  return (
    <div>
      <textarea
        onChange={(e) => {
          setAnswer(questionId, e.target.value);
        }}
        value={currentAnswer || ""}
      ></textarea>
    </div>
  );
}

export default AnswerC;
