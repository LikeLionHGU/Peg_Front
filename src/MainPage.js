import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MainPage.css"; // MainPage.css 파일 import
import LogoutBt from "./img/LogoutBt.png";
import Mainlogo from "./img/Mainlogo.png";
import Pegred from "./img/Pegred.png";
import ex from "./img/ex.png";
import glass from "./img/glass.png";
import Vector16 from "./img/Vector16.png";
import gray from "./img/gray.png";
import profile from "./img/profile.png";
import recone from "./img/recone.png";
import rectwo from "./img/rectwo.png";
import recthree from "./img/recthree.png";
import Vector15 from "./img/Vector15.png";
import du from "./img/du.png";
import Cat from "./img/Cat.png";
import { activities } from "./surveyData";

const MainPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [allUser, setallUser] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    (async () => {
      const allUsersData = await (
        await fetch(`http://localhost:8080/mypage/users`, {
          method: "GET",
          credentials: "include",
        })
      ).json();
      console.log(allUsersData.users);
      setallUser(allUsersData.users);
    })();
  }, []);

  const pageUser = allUser.find((user) => user.id === +username);
  console.log({ pageUser });

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

  if (!pageUser) return <div>User not found</div>;

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
          onClick={() => {
            document.location.href = "/";
          }}
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
          style={{ flex: 0.5, textAlign: "center", height: "400px" }}
        >
          <div style={{ display: "flex" }}>
            <img
              style={{
                width: 26, // 직사각형 너비
                height: 26,
                marginLeft: "40px",
                marginTop: "10px",
              }}
              src={glass}
              alt="glass"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center", // 가로 중앙 정렬
                // 부모 요소의 높이 설정 (필요에 따라 조정)
                alignItems: "center", // 세로 중앙 정렬
              }}
            >
              <input
                type="text"
                placeholder="친구검색"
                style={{
                  width: "100px", // 너비를 텍스트에 맞게 자동 설정
                  height: "15px", // 높이를 텍스트에 맞게 자동 설정
                  marginLeft: "8px",
                  marginTop: "11px",
                  opacity: 0.3, // 투명도 설정
                }}
              />
            </div>
          </div>
          <div>
            <img
              style={{
                width: 210, // 직사각형 너비
                height: 1,
                marginLeft: "25px",
                marginRight: "25px",
                marginTop: "px",
              }}
              src={Vector15}
              alt="Vector15"
            />
          </div>
          {allUser.map((user) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  cursor: "pointer",
                }}
                onClick={() => {
                  console.log("AAA");
                  navigate(`/profile/${user.id}`);
                }}
              >
                <img
                  style={{
                    width: 34, // 직사각형 너비
                    height: 34,
                    marginTop: 20,
                    marginLeft: 50,
                  }}
                  // src={du}
                  src={user.profilePictureUrl}
                  alt="du"
                />
                <p
                  className="custom-text"
                  style={{
                    marginLeft: 13,
                    marginTop: 22,
                  }}
                >
                  {user.name}
                  <br></br>
                  {user.email.split("@")[0]}
                </p>
              </div>
              <img
                style={{
                  width: 210, // 직사각형 너비
                  height: 1,
                  marginLeft: "10px",
                  marginRight: "5px",
                  marginTop: "0px",
                }}
                src={Vector16}
                alt="Vector16"
              />
            </>
          ))}
          <br></br> <br></br>
          <br></br>
          <p className="custom-texts">테스트추천</p>
          <img
            style={{
              width: 210, // 직사각형 너비
              height: 1,
              marginLeft: "25px",
              marginRight: "25px",
              marginTop: "-17px",
            }}
            src={Vector15}
            alt="Vector15"
          />
          <img
            style={{
              width: 200, // 직사각형 너비
              height: 100,
              marginLeft: "1px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
          <img
            style={{
              width: 200, // 직사각형 너비
              height: 100,
              marginLeft: "1px",
              marginTop: "25px",
            }}
            src={gray}
            alt="gray"
          />
          <img
            style={{
              width: 200, // 직사각형 너비
              height: 100,
              marginLeft: "1px",
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
          <div
            style={{
              display: "flex",
              flexDirection: "colum",
            }}
          >
            <img
              style={{
                marginRight: "310px",
                marginTop: "30px",
                width: 150,
                height: 150,
                marginRight: "30px",
                borderRadius: "50%",
              }}
              // src={Pegred}
              src={pageUser.profilePictureUrl}
              alt="Pegred"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  marginTop: "40px",
                  fontSize: "50px",
                  fontWeight: "500",
                }}
              >
                ( {pageUser.name} )'s Peg
              </div>
              <div>
                <p className="left-aligned-text">{activities[+username]}</p>
              </div>

              <img
                style={{
                  width: 90, // 직사각형 너비
                  height: 30,
                  marginLeft: "40px",
                  zIndex: 0,
                }}
                src={profile}
                alt="profile"
              />
              <p className="left-aligned-texts">프로필수정</p>
            </div>
          </div>

          <img
            style={{
              width: 1000, // 직사각형 너비
              height: 1,
              marginLeft: "10px",
            }}
            src={Vector16}
            alt="Vector16"
          />
          <img
            style={{
              width: 570, // 직사각형 너비
              height: 400,
              marginBottom: 160,
              marginLeft: -100,
              marginRight: 30,
            }}
            src={recone}
            alt="recone"
          />
          <img
            style={{
              width: 270, // 직사각형 너비
              height: 490,
              marginBottom: 50,
              marginRight: 1,
              marginTop: 100,
            }}
            src={Cat}
            alt="Cat"
          />
          <div style={{ display: "flex" }}>
            <img
              style={{
                width: 471, // 직사각형 너비
                height: 348,
                marginRight: "20px",
                marginLeft: "20px",
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
      </div>
      <br></br> <br></br>
      <br></br>
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
    </>
  );
};

export default MainPage;
