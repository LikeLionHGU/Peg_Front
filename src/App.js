import "./App.css";
import LoginBt from "./img/LoginBt.png";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
