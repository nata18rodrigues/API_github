import React, { Component, useEffect } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import api from "../../api";

function Login() {
  const [user, setUser] = React.useState("");
  const [userName, setUserName] = React.useState([]);
  const [answer, setAnswer] = React.useState("");

  const resetUser = (event) => {
    setUser(event.target.value);
  };

  const meet = async (event) => {
    event.preventDefault();
    setAnswer(<Redirect to={`/Mostrar/${user}`} />);
  };

  return (
    <div>
      <form onSubmit={meet}>
        <input
          onFocus={user}
          type="text"
          placeholder="digite o nome de usuario:"
          value={user}
          onChange={resetUser}
        ></input>
        <button type="submit">pesquisar</button>
      </form>
      {userName.map((item) => {
        return (
          <li key={item.login}>
            {item.login} - {item.id} -{}
            {item.public_repos ? item.public_repos : "0"}
          </li>
        );
      })}
      <h2>{answer}</h2>
    </div>
  );
}

export default Login;
