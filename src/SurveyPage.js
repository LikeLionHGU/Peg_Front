import React, { useEffect } from "react";
import "./SurveyPage.css"; // SurveyPage.css 파일 import
import { useState } from "react";
import AnswerA from "./component/AnswerA";
import AnswerB from "./component/AnswerB";
import { useNavigate, useParams } from "react-router-dom";
import AnswerC from "./component/AnswerC";
import OXTest from "./img/OXTest.png";
import teduri from "./img/teduri.png";
import halfcircle from "./img/halfcircle.png";
import { surveyData } from "./surveyData";

const resultf = {
  138: 10004,
  139: 10009,
};

function SurveyPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultObject, setResultObject] = useState({});

  const { surveyName } = useParams();

  console.log(surveyName);

  const data = surveyData[surveyName];

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
    answerComponent = (
      <AnswerA
        setAnswer={setAnswer}
        nextQuestion={nextQuestion}
        questionId={data[currentQuestion].questionID}
        currentAnswer={currentAnswer}
      />
    );
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

  const [surveyStatus, setSurveyStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const userData = await (
        await fetch("http://localhost:8080/mypage", {
          method: "GET",
          credentials: "include",
        })
      ).json();
      const resultData = await (
        await fetch(`http://localhost:8080/mypage/result/${userData.id}`, {
          method: "GET",
          credentials: "include",
        })
      ).json();
      if (surveyName === "oxtest") {
        console.log(resultData["oxTestResult"], "AAAAAA");
        if (resultData["oxTestResult"] != -1) setSurveyStatus(2);
        else setSurveyStatus(1);
      } else if (surveyName === "multiplechoicetest") {
        console.log(resultData["oxTestResult"], "AAAAAA");
        if (resultData["multipleResult"] != "null") setSurveyStatus(2);
        else setSurveyStatus(1);
      }
    })();
  }, []);

  if (!surveyStatus) {
    return <div>Loading...</div>;
  }

  if (surveyStatus == 2) {
    return <div>이미 완료한 설문입니다.</div>;
  }

  return (
    <>
      <div className="SurveyPage">
        <img src={teduri} alt="teduri" className="background-image" />
        <div className="content">
          <img
            src={halfcircle}
            alt="halfcircle"
            className="background-images"
          />
          <div className="content-text">
            <div>Hello World!</div>

            <div>Current Question : {currentQuestion}</div>
            <h1>{data[currentQuestion].title}</h1>
            <div className="question-answer">
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
                  onClick={async () => {
                    console.log("서버에 보낼겁니다!!!", resultObject);
                    try {
                      const userData = await (
                        await fetch("http://localhost:8080/mypage", {
                          method: "GET",
                          credentials: "include",
                        })
                      ).json();

                      const submitData = {
                        userId: userData.id,
                        ...resultObject,
                      };
                      console.log(submitData);

                      let apiEndpoint = "";
                      if (surveyName === "oxtest") {
                        apiEndpoint = "OXtest";
                      } else if (surveyName === "multiplechoicetest") {
                        apiEndpoint = "multiplechoicetest";
                      }

                      await fetch(`http://localhost:8080/test/${apiEndpoint}`, {
                        method: "POST", // Specify the method as POST
                        headers: {
                          "Content-Type": "application/json", // Set the Content-Type header to application/json
                        },
                        body: JSON.stringify(submitData), // Convert the data to JSON format
                        credentials: "include",
                      });

                      const resultData = await (
                        await fetch(
                          `http://localhost:8080/mypage/result/${userData.id}`,
                          {
                            method: "GET",
                            credentials: "include",
                          }
                        )
                      ).json();

                      console.log(resultData);

                      if (surveyName === "oxtest") {
                        const oCount = resultData.oxTestResult;
                        console.log("Using oxtest", oCount);

                        if (oCount <= 3) {
                          // 1
                          navigate("./1");
                        } else if (oCount <= 7) {
                          // 2
                          navigate("./2");
                        } else if (oCount <= 9) {
                          // 3
                          navigate("./3");
                        } else {
                          //4
                          navigate("./4");
                        }
                      } else if (surveyName === "multiplechoicetest") {
                        navigate("./" + resultData.multipleResult);
                      }
                    } catch (e) {}

                    // navigate("/result/characterC");
                  }}
                  disabled={!currentAnswer}
                >
                  등록
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
