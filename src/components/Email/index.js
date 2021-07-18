import React from "react";
import "./style.css";

export default () => {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    localStorage.setItem("myValueInLocalStorage", event.target.value);

    setValue(event.target.value);
  };
  return (
    <div>
      <div className="title-box-email">Venha faça seu cadastro de email</div>
      <div className="box">
        <div className="box-email">
          <div>
            <h2> Cadastre e receba indicações sensacionais </h2>
          </div>
          <div className="email-form">
            <input value={value} type="text" onChange={onChange} />
            <button type="submit">Eu quero</button>
          </div>
        </div>
      </div>
    </div>
  );
};
