import React from "react";
import "./SurveyPage.css"; // SurveyPage.css 파일 import
import { useState } from "react";
import AnswerA from "./component/AnswerA";
import AnswerB from "./component/AnswerB";
import { useNavigate } from "react-router-dom";
import AnswerC from "./component/AnswerC";
import OXTest from "./img/OXTest.png";
import teduri from "./img/teduri.png";
import halfcircle from "./img/halfcircle.png";

const data = [
  {
    questionID: 101,
    title: "소개 상대와의 카톡방이 개설되었다, 그때 당신의 속마음은?",
    optionType: "B",
    option: [
      {
        answerID: 10004,
        answerText: "오...어떤 사람일까.. 내가 실수하면 어떡하지?",
      },
      {
        answerID: 10005,
        answerText: "앗싸! 친구한테 소개남(녀)의 정보를 물어봐야겠어.",
      },
      {
        answerID: 10006,
        answerText: "전연애와 똑같으면 어떡하지",
      },
      {
        answerID: 10007,
        answerText: "언제 만나자고 하지? 취미부터 공유해봐야겠다.",
      },
    ],
  },
  {
    questionID: 102,
    title:
      "나를 좋아하는 남사친(여)과 데이트를 하는 중에 많이 사랑했었던 전남친과 마주쳤다. 그날 밤 전남친(여)에게서 “둘이 무슨 사이야?",
    optionType: "B",
    option: [
      {
        answerID: 10008,
        answerText: "전남친은 끝난 사이지, 왜 연락오는거야?",
      },
      {
        answerID: 10009,
        answerText: "아직 못 잊은건가...그때 우리 참 예뻤었는데",
      },
      {
        answerID: 10010,
        answerText: "똥차 가고 벤츠 온다.",
      },
      {
        answerID: 10011,
        answerText: "얘는 이제와서 왜 이러는 걸까...다시 잘해볼려고?",
      },
    ],
  },
  {
    questionID: 103,
    title:
      "시험끝나고 친구들끼리 영일대에 놀러 나갔다. 바다를 보던 중 한 무리의 이성이 번호를 따려고 한다. 그때의 당신은?",
    optionType: "B",
    option: [
      {
        answerID: 10012,
        answerText: "사람은 많이 다양하게 만나봐야되는겨. 번호주자",
      },
      {
        answerID: 10013,
        answerText: "내가 쉬워보이나? 헌팅은 조심하라고 다들 그러던데...",
      },
      {
        answerID: 10014,
        answerText: "내가 잘생겨(예뻐) 보이는군. 역시",
      },
      {
        answerID: 10015,
        answerText: "이러다 큰일 일어나는 건 아니겠지?",
      },
    ],
  },
  {
    questionID: 104,
    title: "애인과 데이트하는 중에 친한 이성친구가 전화가 왔다. 당신의 반응은?",
    optionType: "B",
    option: [
      {
        answerID: 10016,
        answerText: "전화가 왔네? 받아야지",
      },
      {
        answerID: 10017,
        answerText: "데이트중엔 애인한테 집중해야겠다.",
      },
      {
        answerID: 10018,
        answerText: "급한 일이 있나..?(애인의 눈치를 본다)",
      },
      {
        answerID: 10019,
        answerText: "아 눈치없네",
      },
    ],
  },
  {
    questionID: 105,
    title:
      "나 좋다고한 소개남(녀)가 하루만에 인생네컷을 찍자고 한다. 당신의 반응은?",
    optionType: "B",
    option: [
      {
        answerID: 10020,
        answerText: "사진 정도야 뭐 친구랑도 찍으니까",
      },
      {
        answerID: 10021,
        answerText: "너무 빠르지 않나...",
      },
      {
        answerID: 10022,
        answerText: "에이, 너무 쉬우면 썸이냐 튕기자",
      },
      {
        answerID: 10023,
        answerText: "어떤 포즈로 해야 적절할까?",
      },
    ],
  },
  {
    questionID: 106,
    title: "애인이 이성친구를 두고 칭찬을 많이 한다. 그때 당신의 반응은?",
    optionType: "B",
    option: [
      {
        answerID: 10024,
        answerText: "걔는 걔고 나는 나지",
      },
      {
        answerID: 10025,
        answerText: "애인 눈에도 00이 괜찮아보이나...신경쓰인다.",
      },
      {
        answerID: 10026,
        answerText: "죽고싶나...",
      },
      {
        answerID: 10027,
        answerText: "친구의 어떤 점이 내가 본받을만 할까?",
      },
    ],
  },
  {
    questionID: 107,
    title:
      "애인이 내가 좋아하지 않는 친구랑 팀가족이 되어, 가족밥고를 한다고 한다. 당신은 어떤 반응을 보이나요?",
    optionType: "B",
    option: [
      {
        answerID: 10028,
        answerText: "마음에 안 들지만 관여안한다.",
      },
      {
        answerID: 10029,
        answerText: "본인이랑은 사이좋으니까...이해하자.",
      },
      {
        answerID: 10030,
        answerText: "내가 싫다는데 왜 말을 안 듣지?",
      },
      {
        answerID: 10031,
        answerText: "한번 더 말해본다.",
      },
    ],
  },
  {
    questionID: 108,
    title:
      "애인이 내 입냄새가 너무 심해서 힘들다고 토로한다. 당신의 다음 반응은?",
    optionType: "B",
    option: [
      {
        answerID: 10032,
        answerText: "사람은 입냄새 다 나, 신경쓰지 말자",
      },
      {
        answerID: 10033,
        answerText: "너무 민망한데...",
      },
      {
        answerID: 10034,
        answerText: "어쩌라고...",
      },
      {
        answerID: 10035,
        answerText: "엇...나 칫솔질 자주 하는데...치과를 가봐야되나",
      },
    ],
  },
  {
    questionID: 109,
    title:
      "애인이 내가 좋아하지 않는 친구랑 팀씨씨를 한다고 한다. 바로 나오는 당신의 반응은? ",
    optionType: "B",
    option: [
      {
        answerID: 10036,
        answerText: "신경쓰지 않는다.",
      },
      {
        answerID: 10037,
        answerText: "혼자 속으로 삭힌다.",
      },
      {
        answerID: 10038,
        answerText: "화 그 자체로 낸다.",
      },
      {
        answerID: 10039,
        answerText: "침착하게 논리적으로 권유한다.",
      },
    ],
  },
  {
    questionID: 110,
    title:
      "썸타는 사람이 고백과 함께 자신의 얼마남지 않은 군대 영장을 보여주었다. 당신의 선택과 반응은?",
    optionType: "B",
    option: [
      {
        answerID: 10040,
        answerText: "고백을 거절한다.",
      },
      {
        answerID: 10041,
        answerText: "어...어떡하지...친구한테 상담받아야겠다..",
      },
      {
        answerID: 10042,
        answerText: "어이가 없네",
      },
      {
        answerID: 10043,
        answerText:
          "18개월동안 내조를 잘해줘야겠다! 내 할 것 잘하고 있으면 되징",
      },
    ],
  },
];

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
        <img src={teduri} alt="teduri" className="background-image" />
        <div className="content">
          <img
            src={halfcircle}
            alt="halfcircle"
            className="background-images"
          />
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
            {data.length - 1 > currentQuestion ? (
              <button onClick={nextQuestion} disabled={!currentAnswer}>
                다음질문
              </button>
            ) : (
              <button
                onClick={() => {
                  console.log("서버에 보낼겁니다!!!", resultObject);
                  navigate("/result/characterC");
                }}
                disabled={!currentAnswer}
              >
                등록
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
