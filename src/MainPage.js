import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MainPage.css"; // MainPage.css 파일 import
import LogoutBt from "./img/LogoutBt.png";
import Mainlogo from "./img/Mainlogo.png";
import Pegred from "./img/Pegred.png";
import search from "./img/search.png";
import Vector16 from "./img/Vector16.png";
import gray from "./img/gray.png";
import profile from "./img/profile.png";
import recone from "./img/recone.png";
import rectwo from "./img/rectwo.png";
import recthree from "./img/recthree.png";

const MainPage = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

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

  useEffect(() => {
    fetch("http://localhost:8080/mypage", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div>안녕하세요 {userData ? userData.name : "로딩중"} 님</div>
      <div>{username} 님 프로필을 방문하셨습니다</div>
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
        <div
          className="Leftmain"
          style={{ flex: 0.5, textAlign: "center", height: "100px" }}
        >
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 30,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={search}
            alt="search"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />{" "}
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <p>테스트추천</p>
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 100,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 100,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
          <img
            style={{
              width: 150, // 직사각형 너비
              height: 100,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
        </div>
        <div
          style={{
            width: "1px",
            backgroundColor: "#aaa",
            marginRight: "20px", // 왼쪽으로 조금 더 이동
            height: "200px", // 길이를 5배 증가
          }}
        ></div>
        <div className="Rightmain" style={{ flex: 2, textAlign: "center" }}>
          <img
            style={{
              marginLeft: "-550px",
              marginTop: "30px",
              width: 150, // 직사각형 너비
              height: 150,
            }}
            src={Pegred}
            alt="Pegred"
          />
          <p
            style={{
              marginTop: "-120px",
            }}
          >
            사용자 정보
          </p>
          <p>오늘의 패그</p>
          <img
            style={{
              width: 90, // 직사각형 너비
              height: 30,
            }}
            src={profile}
            alt="profile"
          />
          <br></br>
          <img
            style={{
              width: 700, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
              marginTop: "25px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 100, // 직사각형 너비
              height: 200,
            }}
            src={recone}
            alt="recone"
          />
          <img
            style={{
              width: 200, // 직사각형 너비
              height: 200,
              marginBottom: 40,
              marginLeft: 40,
            }}
            src={rectwo}
            alt="rectwo"
          />
          <img
            style={{
              width: 471, // 직사각형 너비
              height: 348,
            }}
            src={recthree}
            alt="rrecthree"
          />
          <img
            style={{
              width: 471, // 직사각형 너비
              height: 348,
            }}
            src={recthree}
            alt="rrecthree"
          />
        </div>
      </div>
      <div className="full-background">
        <div className="footer">
          <div className="lastPeg">PEG</div>
          <div className="Information">
            <div className="team">
              TEAM : Beggy Jins
              <br />
              <br />
              김고은(PM)
              <br />
              김은진(Designer)
              <br />
              김하은(Front_End Developer)
              <br />
              오세훈(Back_End Developer)
              <br />
            </div>
            <div className="email">
              EMAIL
              <br />
              <br />
              jinny010718@handong.ac.kr
              <br />
              22100071@handong.ac.kr
              <br />
              hg2660765@gmail.com <br />
              saint0325@handong.ac.kr
            </div>
            <div className="require">
              INSTAGRAM
              <br />
              @Peg.Official._
              <br />
              <br />
              제휴 문의 <br />
              광고 문의
              <br /> PR 문의 <br />
              IR 문의
            </div>
          </div>
        </div>
      </div>
      <div className="full-background">
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
