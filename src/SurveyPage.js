import React, { useEffect, useState } from "react";
import "./SurveyPage.css"; // SurveyPage.css 파일 import
import AnswerA from "./component/AnswerA";
import AnswerB from "./component/AnswerB";
import { useNavigate, useParams } from "react-router-dom";
import AnswerC from "./component/AnswerC";
import OXTest from "./img/OXTest.png";
import teduri from "./img/teduri.png";
import Group from "./img/Group.png";
import Pink from "./img/Pink.png";
import before from "./img/before.png"; // 왼쪽 화살표 이미지 import
import after from "./img/after.png"; // 오른쪽 화살표 이미지 import
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
        console.log(resultData["oxTestResult"], "oxTestResult");
        if (resultData["oxTestResult"] == -1) setSurveyStatus(1);
        else {
          setSurveyStatus(2);
          const oCount = resultData["oxTestResult"];
          if (oCount <= 3) {
            // 1
            navigate("./1", {
              state: {
                uid: userData.id,
              },
            });
          } else if (oCount <= 7) {
            // 2
            navigate("./2", {
              state: {
                uid: userData.id,
              },
            });
          } else if (oCount <= 9) {
            // 3
            navigate("./3", {
              state: {
                uid: userData.id,
              },
            });
          } else {
            //4
            navigate("./4", {
              state: {
                uid: userData.id,
              },
            });
          }
        }
      } else if (surveyName === "multiplechoicetest") {
        console.log(resultData["multiplechoicetest"], "multiplechoicetest");
        if (resultData["multipleResult"] == "null") setSurveyStatus(1);
        else {
          setSurveyStatus(2);
          navigate("./" + resultData["multipleResult"], {
            state: {
              uid: userData.id,
            },
          });
        }
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
            src={Group}
            alt="Group"
            className="background-images"
            style={{ height: "520px", width: "520px", marginTop: "-40px" }} // 높이와 너비를 조정
          />

          <div className="content-text">
            <h1
              style={{
                textAlign: "center",
                fontFamily: "YourFontFamily",
                height: "115px",
              }}
            >
              {data[currentQuestion].title}
            </h1>
            <div
              className="question-answer"
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column", // 수직 정렬
                justifyContent: "center",
                alignItems: "center", // 수직 정렬
                gap: "20px", // 간격 설정
              }}
            >
              {answerComponent}
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Pink}
              alt="Pink"
              style={{
                height: "90px",
                width: "520px",
                marginTop: "-60px",
                zIndex: 1,
              }} // 높이와 너비를 조정
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => {
                  setCurrentQuestion((prev) => {
                    if (prev > 0) return prev - 1;
                    return 0;
                  });
                }}
                style={{ marginRight: "20px" }} // 왼쪽 화살표 버튼 위치 조정
              >
                <img src={before} alt="Previous" style={{ width: "30px" }} />
              </button>

              <div> {currentQuestion} / 10</div>

              {data.length - 1 > currentQuestion ? (
                <button
                  onClick={nextQuestion}
                  disabled={!currentAnswer}
                  style={{ marginLeft: "20px" }} // 오른쪽 화살표 버튼 위치 조정
                >
                  <img src={after} alt="Next" style={{ width: "30px" }} />
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
                          navigate("./1", {
                            state: {
                              uid: userData.id,
                            },
                          });
                        } else if (oCount <= 7) {
                          // 2
                          navigate("./2", {
                            state: {
                              uid: userData.id,
                            },
                          });
                        } else if (oCount <= 9) {
                          // 3
                          navigate("./3", {
                            state: {
                              uid: userData.id,
                            },
                          });
                        } else {
                          //4
                          navigate("./4", {
                            state: {
                              uid: userData.id,
                            },
                          });
                        }
                      } else if (surveyName === "multiplechoicetest") {
                        navigate("./" + resultData.multipleResult, {
                          state: {
                            uid: userData.id,
                          },
                        });
                      }
                    } catch (e) {}

                    // navigate("/result/characterC");
                  }}
                  disabled={!currentAnswer}
                  style={{ marginLeft: "20px" }} // 제출 버튼 위치 조정
                >
                  <img src={after} alt="Submit" style={{ width: "30px" }} />
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
