import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>hola desde home</h1>
      <button onClick={() => navigate("/lista")}>Lista de Comida</button>
    </div>
  );
};

export default Home;
