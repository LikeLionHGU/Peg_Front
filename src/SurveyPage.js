import React from "react";
import "./SurveyPage.css"; // SurveyPage.css 파일 import
import { useState } from "react";
import AnswerA from "./component/AnswerA";
import AnswerB from "./component/AnswerB";
import { useNavigate } from "react-router-dom";
import AnswerC from "./component/AnswerC";

const data = [
  {
    questionID: 101,
    title: "가장 마음에 드는 이성은?",
    optionType: "B",
    option: [
      {
        answerID: 10004,
        answerText: "아이유",
      },
      {
        answerID: 10005,
        answerText: "수지",
      },
      {
        answerID: 10006,
        answerText: "한소희",
      },
      {
        answerID: 10007,
        answerText: "안유진",
      },
    ],
  },
  {
    questionID: 102,
    title: "가장 좋아하는 색은?",
    optionType: "B",
    option: [
      {
        answerID: 10008,
        answerText: "파랑",
      },
      {
        answerID: 10009,
        answerText: "노랑",
      },
      {
        answerID: 10010,
        answerText: "빨강",
      },
      {
        answerID: 10011,
        answerText: "초록",
      },
    ],
  },
  {
    questionID: 103,
    title: "가장 좋아하는 음식은?",
    optionType: "B",
    option: [
      {
        answerID: 10012,
        answerText: "피자",
      },
      {
        answerID: 10013,
        answerText: "치킨",
      },
      {
        answerID: 10014,
        answerText: "짜장면",
      },
      {
        answerID: 10015,
        answerText: "초밥",
      },
    ],
  },
  {
    questionID: 104,
    title: "가장 좋아하는 동물은?",
    optionType: "B",
    option: [
      {
        answerID: 10016,
        answerText: "강아지",
      },
      {
        answerID: 10017,
        answerText: "고양이",
      },
      {
        answerID: 10018,
        answerText: "판다",
      },
      {
        answerID: 10019,
        answerText: "코알라",
      },
    ],
  },
  {
    questionID: 105,
    title: "가장 좋아하는 여행지는?",
    optionType: "B",
    option: [
      {
        answerID: 10020,
        answerText: "파리",
      },
      {
        answerID: 10021,
        answerText: "발리",
      },
      {
        answerID: 10022,
        answerText: "뉴욕",
      },
      {
        answerID: 10023,
        answerText: "도쿄",
      },
    ],
  },
  {
    questionID: 106,
    title: "가장 최강 멘토는?",
    optionType: "C",
  },
];

// const result4 = [
//   {
//     question: 138,
//     answer: 10004,
//   },
//   {
//     question: 139,
//     answer: 10010,
//   },
// ];

// javascript object!!!!!!!!!
const resultf = {
  138: 10004,
  139: 10009,
};

function SurveyPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultObject, setResultObject] = useState({});

  const currentAnswer = resultObject[data[currentQuestion].questionID];
  console.log(resultObject);

  const setAnswer = (questionId, answerId) => {
    setResultObject((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => {
      if (data.length - 1 > prev) return prev + 1;
      return prev;
    });
  };

  const type = data[currentQuestion].optionType;
  let answerComponent;
  console.log(type);

  if (type === "A") {
    answerComponent = <AnswerA />;
  } else if (type === "B") {
    answerComponent = (
      <AnswerB
        answerOption={data[currentQuestion].option}
        setAnswer={setAnswer}
        nextQuestion={nextQuestion}
        questionId={data[currentQuestion].questionID}
        currentAnswer={currentAnswer}
      />
    );
  } else if (type === "C") {
    answerComponent = (
      <AnswerC
        setAnswer={setAnswer}
        nextQuestion={nextQuestion}
        questionId={data[currentQuestion].questionID}
        currentAnswer={currentAnswer}
      />
    );
  }

  return (
    <>
      <div className="container">
        <div>Hello World!</div>

        <div>Current Question : {currentQuestion}</div>
        <h1>{data[currentQuestion].title}</h1>
        <div>
          <h3>Answer</h3>
          {answerComponent}
        </div>
        <div>
          <button
            onClick={() => {
              setCurrentQuestion((prev) => {
                if (prev > 0) return prev - 1;
                return 0;
              });
            }}
          >
            이전질문
          </button>
          {/* 삼향 연산자 */}
          {data.length - 1 > currentQuestion ? (
            <button onClick={nextQuestion} disabled={!currentAnswer}>
              다음질문
            </button>
          ) : (
            <button
              onClick={() => {
                console.log("서버에 보낼겁니다!!!", resultObject);
                // 서버에서 답이 왔습니다!!
                navigate("/result/characterC");
              }}
              disabled={!currentAnswer}
            >
              등록
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
