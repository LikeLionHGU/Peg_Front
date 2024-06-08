import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyPage from "./SurveyPage";
import Auth from "./Auth";
import MainPage from "./MainPage";
import ResultPage from "./ResultPage";
import Mypage from "./Mypage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/survey/:surveyName" element={<SurveyPage />} />
        <Route path="/survey/:surveyName/:resultId" element={<ResultPage />} />
        {/* <Route path="/gallery" element={<DetailCardPage />}>
            <Route path=":cardId" element={<DetailCard />} />
          </Route> */}

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/profile/:username" element={<MainPage />} />
        <Route path="/Auth/:id" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
