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
        if(item){
        return (
          <div key={item.user} class="control">
            <div class="imgcube">
              <img class="b" src={item.avatar_url} alt=""></img>
            </div>
            <div class="cube" >
              login: {item.login} <br />
              idNumber:{item.id} <br />
              public_repos:{item.public_repos ? item.public_repos : "0"}<br />
              <br/>
              <h5><Link to="/Login">nova pesquisa</Link></h5>
            </div>
          </div>
        );
     } })}
      
    </div>
  );
}
export default Mostrar;
