import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/mypage", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => navigate(`/profile/${data.id}`))
      .catch((error) => console.error("Error:", error));
  }, []);
  return <div>Mypage</div>;
}

export default Mypage;
