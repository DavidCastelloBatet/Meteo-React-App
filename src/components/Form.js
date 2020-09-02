import React from "react";

const Form = (props) => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Ciutat..." />
      <input type="text" name="country" placeholder="Pais..." />
      <button variant="success">Obtenir el temps</button>
    </form>
  </div>
);

export default Form;
