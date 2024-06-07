import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Auth() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    localStorage.setItem("user", id);
    navigate("/profile/ha.eoii");
  }, [id, navigate]);
  return <div>Auth {id}</div>;
}

export default Auth;

// http://localhost:3000/Auth/{id}
// http://localhost:3000/Auth/ABCDE12352dfa
