import React, { useState } from "react";
import MainContext from "./MainContext";

// const baseUrl = 'http://localhost:5000';
const baseUrl = 'https://backend.bln.obtechenterprise.com';

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
        'token': localStorage.getItem('b2b_token')
      }
    });
    const data = await resp.json();
    return data;
  };

  const updateUser = async ({ userId, name, email, phone, categoryies,  website, budget, file, location,aboutCompany,twiter,facebook,linkdin,insta,city }) => {

    let formdata=new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('phone', phone);
    formdata.append('categoryies', categoryies);
    formdata.append('website', website);
    formdata.append('budget', budget);
    formdata.append('file', file);
    formdata.append('location', location);
    formdata.append('aboutCompany', aboutCompany);
    formdata.append('twiter', twiter);
    formdata.append('facebook', facebook);
    formdata.append('linkdin', linkdin);
    formdata.append('insta', insta);
    formdata.append("city", city)
    const token = localStorage.getItem('b2b_token');

    const resp = await fetch(`${baseUrl}/user/updateUser/${userId}`, {
      method: 'PUT',
      headers: {
        // 'token': localStorage.getItem('b2b_token')
        'Authorization': `Bearer ${token}`
      },
      body: formdata
    });
    const data = await resp.json();
    return data;
  };

  const verify = async () => {
    const resp = await fetch(`${baseUrl}/user/verify`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('b2b_token')
      }
    });
    const data = await resp.json();
    return data;
  };

  const sendOtp = async ({ email }) => {
    const resp = await fetch(`${baseUrl}/user/sendOtp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('b2b_token')
      },
      body: JSON.stringify({ email })
    });
    const data = await resp.json();
    console.log(data);
    return data;
  };

  const submitOtp = async ({ otp, otp1 }) => {
    const resp = await fetch(`${baseUrl}/user/submitOtp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('b2b_token')
      },
      body: JSON.stringify({ otp, otp1 })
    });
    const data = await resp.json();
    return data;
  };

  const changePassword = async ({ email, password }) => {
    const resp = await fetch(`${baseUrl}/user/changePassword`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('b2b_token')
      },
      body: JSON.stringify({ email, password })
    });
    const data = await resp.json();
    return data;
  };

  const resetPassword = async ({ userId, password }) => {
    const resp = await fetch(`${baseUrl}/user/resetPassword/${userId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('b2b_token')
      },
      body: JSON.stringify({ password })
    });
    const data = await resp.json();
    return data;
  };

  return (
    <MainContext.Provider value={{ login, register, getUsers, user, setUser, updateUser,verify,sendOtp,submitOtp,changePassword,resetPassword }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
