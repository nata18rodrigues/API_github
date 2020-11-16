import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

function Mostrar(props) {
  const user = props.match.params.user;
  const [userName, setUserName] = React.useState([]);

  useEffect(async () => {
    const response = await api.get(user);
    setUserName(userName.concat(response.data));
    console.log("recebendo", response.data);
  }, []);

  return (
    <div>
      {userName.map((item) => {
        return (
          <text key={item.user}>
            <text>login: {item.login}</text> <br />{" "}
            <text>idNumber:{item.id}</text> <br />{" "}
            <text>
              public_repos:{item.public_repos ? item.public_repos : "0"}
            </text>
          </text>
        );
      })}
      <h5>
        <Link to="/Login">nova Pesquisa</Link>
      </h5>
    </div>
  );
}
export default Mostrar;
