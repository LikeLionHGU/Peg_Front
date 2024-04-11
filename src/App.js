import "./App.css";
import LoginBt from "./img/LoginBt.png";
import Y2K from "./img/Y2K.png";

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
          <div className="MainText">PEG</div>
        </div>
      </div>
      <div className="full-backgroundd"></div>

      <div className="full-backgrounddd">
        <div className="secondMainpage">
          <div className="secondheader">
            S UL SNS<br></br> ARCHIVING ME
          </div>
          <div className="secondtext">
            나 그리고 상대의 내면 ( <img src={Y2K} alt="Y2K" /> ) 페그에서함께
            알아가요{" "}
          </div>
        </div>
      </div>
      <div className="full-backgrounddd"></div>

      <div className="full-backgrounddd"></div>
      <div className="full-backgrounddd"></div>
    </>
  );
};

export default App;
