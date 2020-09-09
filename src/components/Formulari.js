import React from "react";
import styled from "styled-components";

//Estil del components
const Dades = styled.div`
  background: var(--bggrad);
  padding: 1rem 0;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form h3 {
    color: var(--verd);
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  form input {
    border-radius: 10px;
    font-size: 1rem;
    margin-bottom: 10px;
    padding: 5px;
    width: 30%;
  }
  form input[placeholder] {
    border: 1px solid var(--verd);
    background-color: var(--bg);
    padding-left: 25px;
  }

  form button {
    background-color: var(--groc);
    border: 2px solid var(--verd);
    border-radius: 10px;
    color: var(--verd);
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 4px 10px;
    font-weight: 600;
    width: 10rem;
    transition: all 0.5s ease;
  }
  form button:hover {
    background-color: var(--verd);
    border: 2px solid var(--blauClar);
    color: white;
  }
`;

//Llògica del component
const Formulari = (props) => (
  <Dades>
    <form onSubmit={props.getWeather}>
      <h3>Selecciona ciutat i país</h3>
      <input type="text" name="city" placeholder="Ciutat..." />
      <input type="text" name="country" placeholder="Pais..." />
      <button variant="success">Obtenir el temps</button>
    </form>
  </Dades>
);

export default Formulari;
