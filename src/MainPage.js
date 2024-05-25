// MainPage.js
import React, { useEffect } from "react";

import "./MainPage.css"; // MainPage.css 파일 import
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutBt from "./img/LogoutBt.png";
import Mainlogo from "./img/Mainlogo.png";
import Pegred from "./img/Pegred.png";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-section");
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("visible"); // 애니메이션 클래스 추가
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

const MainPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            marginLeft: "30px",
            marginTop: "20px",
            width: 50, // 직사각형 너비
            height: 50,
          }}
          src={Mainlogo}
          alt="Mainlogo"
        />
        <img
          style={{
            width: 105, // 직사각형 너비
            height: 40,
            marginRight: "30px",
            marginTop: "25px",
          }}
          src={LogoutBt}
          alt="LogoutBt"
        />
      </div>
      <div
        style={{
          width: "95%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "20px 30px 10px ",
        }}
      ></div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="Leftmain">친구검색</div>
        <div className="Rightmain">
          <img
            style={{
              marginLeft: "30px",
              marginTop: "20px",
              width: 50, // 직사각형 너비
              height: 50,
            }}
            src={Pegred}
            alt="Mainlogo"
          />
        </div>
      </div>
      <div className="full-backgroundddd">
        <div className="footer">
          <div className="lastPeg">PEG</div>
          <div className="Information">
            <div className="team">
              TEAM : Beggy Jins<br></br>
              <br></br>
              김고은(PM)<br></br>
              김은진(Designer)<br></br>
              김하은(Front_End Developer)<br></br>
              오세훈(Back_End Developer)<br></br>
            </div>
            <div className="email">
              EMAIL<br></br>
              <br></br>
              jinny010718@handong.ac.kr<br></br>
              22100071@handong.ac.kr<br></br>
              hg2660765@gmail.com <br></br>
              saint0325@handong.ac.kr
            </div>
            <div className="require">
              INSTAGRAM<br></br>
              @Peg.Official._<br></br>
              <br></br>
              제휴 문의 <br></br>광고 문의<br></br> PR 문의 <br></br>IR 문의
            </div>
          </div>
        </div>
      </div>
      <div className="full-backgrounddddd">
        <div className="animated-title">
          <div className="track">
            <div className="content">
              &nbsp;&nbsp; SOUL SNS ARCHIVING ME&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
