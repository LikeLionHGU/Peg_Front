import React from "react";

function AnswerB({
  answerOption,
  nextQuestion,
  setAnswer,
  questionId,
  currentAnswer,
}) {
  console.log({ answerOption });

  return (
    <div>
      {answerOption.map((item, idx) => {
        console.log({ currentAnswer, a: item.answerID });
        return (
          <div
            key={idx}
            style={{
              margin: "4px",
              cursor: "pointer",
              border: "1px solid white",
              padding: "16px 40px",
              borderRadius: 10,
            }} // 추가된 key prop
            className={currentAnswer === item.answerID ? "selected" : ""}
            onClick={() => {
              setAnswer(questionId, item.answerID);
              nextQuestion();
            }}
          >
            {idx + 1}. {item.answerText}
          </div>
        );
      })}
    </div>
  );
}

export default AnswerB;
