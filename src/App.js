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
            <div>
              The Bird fight its way out of the egg. <br></br>The egg is the
              world.<br></br> Who would be born must<br></br> first destory a
              world.
            </div>
            <div>
              {" "}
              <img src={LoginBt} alt="LoginBt" />{" "}
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
              marginTop: "400px",
            }}
          >
            <div>나를 알아가는 상황문답</div>
            <div>
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
          <div style={{ display: "absolute", marginLeft: "100px" }}>
            <div>나를 알아가는 상황문답</div>
            <div>
              제시된 상황 속에서 <br></br>나의 내면을 기록해보세요
            </div>
          </div>
          <img
            src={test}
            alt="test"
            style={{
              height: "535.84px", // 전체 화면 높이
              width: "811px",
              marginRight: "55px",
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
          <div style={{ display: "absolute" }}>
            <div>나를 알아가는 상황문답</div>
            <div>
              제시된 상황 속에서 <br></br>나의 내면을 기록해보세요
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
