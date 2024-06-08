import React, { useState } from "react";
import teduri from "./img/teduri.png";
import djq from "./img/djq.png";
import xp from "./img/xp.png";
import Group30 from "./img/Group30.png";
import mypegpage from "./img/mypegpage.png";

import winter from "./img/winter.png";
import spring from "./img/spring.png";
import summer from "./img/summer.png";
import fall from "./img/fall.png";

import Cat from "./img/Cat.png";
import weight from "./img/weight.png";
import tree from "./img/tree.png";
import lion from "./img/lion.png";

import "./ResultPage.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function ResultPage() {
  const { surveyName, resultId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { uid } = state || {};

  const getImg = () => {
    if (surveyName === "oxtest") {
      const options = [Cat, weight, tree, lion];
      return options[+resultId - 1];
    } else if (surveyName === "multiplechoicetest") {
      const options = [winter, spring, summer, fall];
      return options[+resultId.replace("result", "") - 1];
    }
  };

  // console.log(state);
  return (
    <div className="Result">
      <div className="containers">
        <img src={teduri} alt="teduri" className="background-image" />
        <div className="left">
          <img src={getImg()} alt="Cat" className="as" />
        </div>
        {uid ? (
          <div className="right">
            <img src={Group30} alt="Group30" className="ass" />
            <img
              src={mypegpage}
              alt="mypegpage"
              className="asss click"
              onClick={() => {
                navigate("/profile/" + uid);
              }}
            />
            <img
              src={xp}
              alt="xp"
              className="assss click"
              onClick={() => {
                if (surveyName === "oxtest") {
                  fetch(`http://localhost:8080/test/OXtest/${uid}`, {
                    method: "delete",
                    credentials: "include",
                    redirect: "manual",
                  }).finally(() => {
                    navigate("/survey/oxtest");
                  });
                } else if (surveyName === "multiplechoicetest") {
                  fetch(
                    `http://localhost:8080/test/multiplechoicetest/${uid}`,
                    {
                      method: "delete",
                      credentials: "include",
                      redirect: "manual",
                    }
                  ).finally(() => {
                    navigate("/survey/multiplechoicetest");
                  });
                }
              }}
            />
            {/* <img src={djq} alt="djq" className="asssss click" /> */}
            <p>
              테스트 결과를 업로드하고 친구의 테스트 결과도 확인해보세요
              <br></br>나만의 테스트 결과를 SNS에 공유해보세요 !
            </p>
          </div>
        ) : (
          <Link style={{ color: "white" }} to="/">
            메인페이지로
          </Link>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
