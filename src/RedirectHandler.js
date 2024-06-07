import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 쿼리 매개변수 추출 (예: 토큰)
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token"); // 실제 토큰 추출 로직으로 대체

    // 토큰을 로컬 스토리지에 저장 (예시)
    if (token) {
      localStorage.setItem("token", token);
    }

    // 새로운 페이지로 리디렉션
    navigate("/newpage");
  }, [navigate]);

  return <div>리디렉션 중입니다...</div>;
};

export default RedirectHandler;
