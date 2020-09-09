import React from "react";
import styled from "styled-components";

//Estils del component
const Resultats = styled.div`
  background: var(--bggradinvers);
  border: 1px solid rgb(145, 236, 221);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  hr {
    border: 1px solid;
    color: var(--verd);
    width: 50%;
  }
  .alert {
    color: var(--vermell);
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  p,
  .dades-ciutat,
  .dades {
    letter-spacing: 1.5px;
  }
  p {
    font-size: 1.2rem;
  }
  .dades-ciutat {
    color: var(--verd);
    font-size: 1.6rem;
  }
  .dades {
    color: var(--vermell);
    font-size: 1.3rem;
  }
`;
//LLògica del component
const Weather = (props) => (
  <Resultats>
    {props.city && props.country && (
      <p>
        Població : <span className="dades-ciutat">{props.city} </span>,{" "}
        {props.country}{" "}
      </p>
    )}
    {props.temperature && (
      <p>
        Temperatura : <span className="dades">{props.temperature}</span> ºC
      </p>
    )}
    {props.humidity && (
      <p>
        Humitat : <span className="dades">{props.humidity}</span> %
      </p>
    )}
    {props.description && (
      <p>
        Condicions : <span className="dades">{props.description}</span>
      </p>
    )}

    <span className="alert">{props.error && <p>{props.error}</p>}</span>
  </Resultats>
);

export default Weather;
