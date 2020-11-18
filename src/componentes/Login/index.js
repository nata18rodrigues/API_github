import React, { Component, useEffect } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import login from "../../css/login.css";
import axios from "axios";

function Login() {
  const [user, setUser] = React.useState("");
  const [userName, setUserName] = React.useState([]);
  const [answer, setAnswer] = React.useState("");
  const [request, setResquest] = React.useState(false);

  useEffect(async () => {
    const api = axios.create({
      baseURL: `https://api.github.com/search/users?q=${user}+in:user`  
    });
    const response = await api.get("");

    setUserName(response.data.items);
    console.log("usuario", user);
    console.log("recebendo", response.data);
  }, [request]);

  const resetUser = (event) => {
    setUser(event.target.value);
  };

  const meet = async (event) => {
    event.preventDefault();
    setResquest(!request);
    
  };


  return (
    <div className="general">
      <center>
        <form onSubmit={meet}>
          <input
            type="text"
            placeholder="digite o nome de usuario:"
            value={user}
            onChange={resetUser}
          ></input>
          <button type="submit">pesquisar</button>
        </form>
      </center>
      <br />
      {userName.map((item) => {
        return (
          <div class="results" key={item.login}>
            <div class="box">
              <img class="a" src={item.avatar_url} alt="" />
              <Link to={`/Mostrar/${item.login}`}>username: {item.login}</Link>
              <br />
              <br />
            </div>
            <br />
          </div>
        );
      })}

      <h2>{answer}</h2>
    </div>
  );
}

export default Login;
//https://api.github.com/users/nata18rodrigues

/*

*/
