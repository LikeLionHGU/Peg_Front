import "./App.css";
import LoginBt from "./img/LoginBt.png";
import Y2K from "./img/Y2K.png";
import heart from "./img/heart.png";
import test from "./img/test.png";

const App = () => {
  return (
    <>
      <div className="full-background">
        <div className="Mainpagetotal">
          <div className="header">
            <div
              style={{
                marginLeft: "40px",
                marginTop: "50px",
              }}
            >
              The Bird fight its way out of the egg. <br></br>The egg is the
              world.<br></br> Who would be born must<br></br> first destory a
              world.
            </div>
            <div>
              {" "}
              <img
                src={LoginBt}
                alt="LoginBt"
                style={{
                  height: "61px", // 전체 화면 높이
                  width: "132px",
                  marginRight: "39px",
                  marginTop: "30px",
                }}
              />{" "}
            </div>
          </div>
          <div className="Truestories">
            True stories <br></br>about the deep <br></br>inside of me +
          </div>
          <div className="MainText">PEG</div>
        </div>
      </div>
      <div className="full-backgroundd"></div>

      <div className="full-backgrounddd">
        <div className="secondMainpage">
          <div className="secondheader">
            S(
            <img src={heart} alt="heart" />
            )UL SNS<br></br> ARCHIVING ME
          </div>
          <div className="secondtext">
            나 그리고 상대의 내면 <div className="insideweight">(</div>{" "}
            <img src={Y2K} alt="Y2K" /> <div className="insideweight"> )</div>
            페그에서 함께 알아가요{" "}
          </div>
        </div>
      </div>
      <div className="full-backgrounddd">
        <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
          <img
            src={test}
            alt="test"
            style={{
              height: "535.84px", // 전체 화면 높이
              width: "811px",
              marginLeft: "55px",
            }}
          />
          <div
            style={{
              positiom: "absolute",
              marginLeft: "-30px",
              marginTop: "310px",
              textAlign: "Right",
            }}
          >
            <div className="boldtext">나를 알아가는 상황문답</div>
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
              positiom: "absolute",
              marginRight: "30px",
              marginTop: "310px",
              textAlign: "Left",
              zIndex: 2,
            }}
          >
            <div className="boldtext">나를 담은 아카이브</div>
            <div className="lighttext">
              휘발되는 것이 아닌 나의 결과를 <br></br>아카이빙하여 친구와 나눌
              수 있어요
            </div>
          </div>
          <img
            src={test}
            alt="test"
            style={{
              height: "535.84px", // 전체 화면 높이
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
            src={test}
            alt="test"
            style={{
              height: "535.84px", // 전체 화면 높이
              width: "811px",
              marginLeft: "55px",
            }}
          />
          <div
            style={{
              positiom: "absolute",
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
              오세훔(Back_End Developer)<br></br>
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
        <div class="animated-title">
          <div class="track">
            <div class="content">
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

export default App;
