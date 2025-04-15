import React from "react";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {useEffect,useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  console.log(cookies)
  useEffect(() => {
    const verifyCookie = async () => {
       const { data } = await axios.post(
         "https://stocknest-vtp4.onrender.com",
        //  "http://localhost:8000/",
         {},
         { withCredentials: true }
       );
       console.log(data)
       const { status, user } = data;
       setUsername(user);
       return status
         ? navigate('/')
         : (removeCookie("token"), window.location.href="https://stocknest-seven.vercel.app/login");
        // :navigate('/')
    };
    verifyCookie();
  },[]);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;