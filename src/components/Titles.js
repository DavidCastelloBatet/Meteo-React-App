import React from "react";
import styled from "styled-components";
import img from "../img/Vinyes.jpg";

//Estils del component
const Header = styled.div`
  background-image: url(${img});
  background-position: 60% 20%;
  height: 15rem;
  padding: 10px;
  h1 {
    color: var(--verd);
    font-size: 3rem;
    letter-spacing: 3px;
    margin-top: -10px;
  }
  p {
    color: var(--groc);
    font-size: 1.2rem;
    letter-spacing: 1rem;
    margin-left: 15%;
    margin-top: 10px;
  }
`;

//Llogica del component
const Titles = () => {
  return (
    <Header>
      <p>Temperatura, condicions i mes...</p>
      <h1>Meteo Finder</h1>
    </Header>
  );
};

export default Titles;
