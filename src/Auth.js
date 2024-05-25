import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Auth() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    localStorage.setItem("user", id);
    navigate("/mainpage");
  }, [id, navigate]);
  return <div>Auth {id}</div>;
}

export default Auth;

// http://localhost:3000/Auth/{id}
// http://localhost:3000/Auth/ABCDE12352dfa

//로그인 와료됐을때  요기 링크에 아이디 담아서 넘겨주세요!! 토큰을 주세요!! 고유식별번호
