import React from "react";

function AnswerB({
  answerOption,
  nextQuestion,
  setAnswer,
  questionId,
  currentAnswer,
}) {
  console.log(answerOption);
  return (
    <div>
      {answerOption.map((item, idx) => (
        <div
          className={currentAnswer === item.answerID ? "selected" : ""}
          onClick={() => {
            setAnswer(questionId, item.answerID);
            nextQuestion();
          }}
        >
          {idx + 1}. {item.answerText}
        </div>
      ))}
    </div>
  );
}

export default AnswerB;
