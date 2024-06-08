import React, { useState, useEffect } from "react";
import "./App.css";
import LoginBt from "./img/LoginBt.png";
import Y2K from "./img/Y2K.png";
import heart from "./img/heart.png";
import Mainpageone from "./img/Mainpageone.png";
import Vectorseven from "./img/Vectorseven.png";
import egg from "./img/egg.png";
import Mainpagetwo from "./img/Mainpagetwo.png";
import Mainpagethree from "./img/Mainpagethree.png";
import { animateScroll as scroll } from "react-scroll";
import SurveyPage from "./SurveyPage";
// import MainPage from "./MainPage";
import RedirectHandler from "./RedirectHandler";
import Modal from "./Modal"; // Import Modal component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-section");
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("visible");
        }
      }

      const mainText = document.querySelector(".MainText");
      if (mainText) {
        const opacity = Math.max(0, 1 - window.scrollY / 200); // 200은 조절 가능한 값
        mainText.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClick = () => {
    goToSurveyPage();
  };

  const goToSurveyPage = () => {
    navigate("/survey");
  };

  const handleClickss = () => {
    goToMainPage();
  };

  const goToMainPage = () => {
    navigate("/profile/ha.eoii");
  };

  return (
    <>
      <div className="full-background">
        <div className="Mainpagetotal">
          <div className="header">
            <div
              className="fade-in-section"
              style={{
                marginLeft: "40px",
                marginTop: "50px",
              }}
            >
              The Bird fight its way out of the egg. <br></br>The egg is the
              world.<br></br> Who would be born must<br></br> first destroy a
              world.
            </div>
            <div className="fade-in-section">
              <img
                src={LoginBt}
                alt="LoginBt"
                style={{
                  height: "56px",
                  width: "125px",
                  marginRight: "35px",
                  marginTop: "35px",
                  cursor: "pointer",
                }}
                onClick={openModal}
              />
            </div>
          </div>
          <div style={{ position: "absolute" }}>
            <div
              className="Truestories"
              style={{
                color: "black",
                marginLeft: "700px",
                marginBottom: "1px", // 이 값을 조정하여 위치를 밑으로 이동
              }}
            >
              True stories <br></br>about the deep
              <br></br>inside of me +
            </div>
            <img
              src={egg}
              alt="egg"
              style={{
                height: "270px",
                width: "260px",
                marginLeft: "600px",
                marginTop: "0px", // 이 값을 조정하여 위치를 밑으로 이동
                zIndex: 0,
              }}
            />
          </div>

          <div className="MainText">PEG</div>
        </div>
      </div>
      <div className="full-backgroundd"></div>

      <div className="full-backgrounddd">
        <div className="secondMainpage">
          <div className="secondheader">
            S(
            <img
              src={heart}
              alt="heart"
              style={{
                marginBottom: "-20px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
            )UL SNS<br></br> ARCHIVING ME
          </div>
          <div className="secondtext">
            나 그리고 상대의 내면 <div className="insideweight">(</div>{" "}
            <img
              src={Y2K}
              alt="Y2K"
              style={{
                marginBottom: "10px",
                marginLeft: "-140px",
                marginRight: "-140px",
              }}
            />{" "}
            <div className="insideweight"> )</div>
            페그에서 함께 알아가요{" "}
          </div>
        </div>
      </div>

      <div className="full-backgrounddd">
        <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
          <img
            src={Mainpageone}
            alt="Mainpageone"
            style={{
              height: "535.84px",
              width: "811px",
              marginLeft: "55px",
              marginTop: "200px",
            }}
          />
          <div
            style={{
              position: "absolute",
              marginLeft: "-30px",
              marginTop: "390px",
              textAlign: "Right",
            }}
          >
            <div className="boldtexttt">나를 알아가는 상황문답</div>
            <div className="lighttext">
              제시된 상황 속에서 <br></br>나의 내면을 기록해보세요
            </div>
          </div>
        </div>
      </div>
      {/* */}

      <div className="full-backgrounddd">
        {" "}
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              position: "absolute",
              marginRight: "30px",
              marginTop: "310px",
              textAlign: "Left",
              zIndex: 2,
            }}
          >
            <div className="boldtextt">나를 담은 아카이브</div>
            <div className="lighttext">
              휘발되는 것이 아닌 나의 결과를 <br></br>아카이빙하여 친구와 나눌
              수 있어요
            </div>
          </div>
          <img
            src={Mainpagetwo}
            alt="Mainpagetwo"
            style={{
              height: "535.84px",
              width: "811px",
              marginRight: "55px",
              zIndex: 0,
            }}
          />
        </div>
      </div>
      <div className="full-backgrounddd">
        {" "}
        <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
          <img
            src={Mainpagethree}
            alt="Mainpagethree"
            style={{
              height: "535.84px",
              width: "811px",
              marginLeft: "55px",
            }}
          />
          <div
            style={{
              position: "absolute",
              marginLeft: "75px",
              marginTop: "310px",
              textAlign: "Right",
            }}
          >
            <div className="boldtext">나만의 테스트카드</div>
            <div className="lighttext">
              테스트 결과에 따른 <br></br>나만의 이미지 카드를 받을 수 있어요
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: 200,
          height: 100,
          backgroundColor: "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        클릭
      </div>
      <div
        style={{
          width: 200,
          height: 100,
          backgroundColor: "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
        }}
        onClick={handleClickss}
      >
        클릭
      </div>
      <img
        src={Vectorseven}
        alt="Vectorseven"
        style={{
          height: "1px",
          width: "100%",
          marginRight: "55px",
          zIndex: 0,
        }}
      />
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
              ARCHIVING ME &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; SOUL SNS
              ARCHIVING ME
            </div>
          </div>
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </>
  );
}

export default App;
