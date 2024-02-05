import React, { useState } from "react";
import MainContext from "./MainContext";

const baseUrl = 'http://localhost:5000';
// const baseUrl = 'http://18.116.199.186/'
// const baseUrl='https://diabolo.onrender.com';
// const baseUrl = 'https://dolibo-backend.onrender.com';
// const baseUrl = "https://dolibobackend.madfishdev.com";
// const baseUrl = "https://dev.dolibo.com";

const MainState = (props) => {
  const [user, setUser] = useState({})

  const login = async ({ email, password }) => {
    const resp = await fetch(`${baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await resp.json();
    // setUser(data);
    return data;
  };

  const register = async ({ name, email, password,categoryies,confirmPassword }) => {
    const resp = await fetch(`${baseUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password,categoryies,confirmPassword })
    });
    const data = await resp.json();
    return data;
  };

  const getUsers = async (id,query, page, perPage) => {
    const resp = await fetch(`${baseUrl}/user/getUsers?id=${id}&query=${query}&page=${page}&perPage=${perPage}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('dolibo_token')
      }
    });
    const data = await resp.json();
    return data;
  };

  const updateUser = async ({ userId, name, email, designation, bio, country, state, file, password }) => {
    let formdata=new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('designation', designation);
    formdata.append('bio', bio);
    formdata.append('country', country);
    formdata.append('state', state);
    formdata.append('file', file);
    formdata.append('password', password);

    const resp = await fetch(`${baseUrl}/user/updateUser/${userId}`, {
      method: 'PUT',
      headers: {
        'token': localStorage.getItem('dolibo_token')
      },
      body: formdata
    });
    const data = await resp.json();
    console.log(data);
    return data;
  };

  return (
    <MainContext.Provider value={{ login, register, getUsers, user, setUser, updateUser }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
