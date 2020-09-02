import React from "react";

const Weather = (props) => (
  <div>
    {props.city && props.country && (
      <p>
        Població : {props.city}, {props.country}{" "}
      </p>
    )}
    {props.temperature && <p>Temperatura : {props.temperature}</p>}
    {props.humidity && <p>Humitat : {props.humidity}</p>}
    {props.description && <p>Condicions : {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
