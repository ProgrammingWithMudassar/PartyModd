import React, { useState } from "react";
import Button from "../General/Button";
import { Link } from "react-router-dom";
import LazyImage from "../General/LazyImage";
import { motion } from "framer-motion";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

import { ToastContainer, toast } from "react-toastify";

export default function Login({}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const inputhandler = (e: any) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  console.log("Input Field", user);

  const LoginUser = async (e: any) => {
    console.log("Logining in...");
    e.preventDefault();
    setLoading(true);

    const reponse = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(user),
    });

    console.log(reponse);

    if (reponse.status == 200) {
      setLoading(false);
      toast.success("You have successfully logged in!!");
      navigate("/");
    } else {
      setLoading(false);

      toast.error("Invalid credentials!!");
    }
  };

  const loginAsGoogle = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <>
      <section className="w-[calc(100vw - 100%)] h-[100vh] flex xsm:flex-col sm:flex-col">
      <ToastContainer />

        <div className="authBackground flex-1 flex justify-center items-center py-[60px]">
          <div className="authFliterEffect rounded-[50px] w-[39.76945244956772vw] xsm:min-w-[80vw] sm:min-w-[60vw] h-[331px] flex justify-center items-center ml-[-45px] xsm:ml-0 sm:ml-0 pl-[4.14985590778098vw]">
            <h1 className="w-[35vw] xsm:min-w-[70vw] sm:min-w-[50vw] font-[700] text-[48px] leading-[78px] xsm:leading-[40px] sm:leading-[40px] text-[#fff]">
              Exclusive <span className="text-[#FB4A04]">events,</span>{" "}
              <span className="font-[700] text-[32px] leading-[52px]">
                priceless memories.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex-1 bg-[#fff] ml-[-45px] xsm:ml-0 sm:ml-0 xsm:min-w-[80vw] rounded-tl-[50px] rounded-bl-[50px]">
          <div className="w-[52%] xsm:w-[70%] sm:w-[62%] m-auto">
            <div className="pt-[38px]">
              <Link to="/">
                <img src="./Logo.png" alt="" />
              </Link>
              <h1 className="font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[13px]">
                Login
              </h1>
            </div>

            <form className="mt-[25px]">
              <div>
                <label
                  className="font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] "
                  style={{ fontWeight: "600" }}
                >
                  Email
                </label>
                <input
                  className="w-[27.608069164265128vw] xsm:min-w-full sm:min-w-full h-[50px] block rounded-[10px] border-[1px] border-[#473a3a]"
                  style={{ padding: "0 10px" }}
                  name="email"
                  onChange={inputhandler}
                  value={user.email}
                />
              </div>
              <div className="mt-[15px]">
                <label
                  className="font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] "
                  style={{ fontWeight: "600" }}
                >
                  Password
                </label>
                <input
                  className="w-[27.608069164265128vw] xsm:min-w-full sm:min-w-full h-[50px] block rounded-[10px] border-[1px] border-[#473a3a]"
                  style={{ padding: "0 10px" }}
                  name="password"
                  onChange={inputhandler}
                  value={user.password}
                />
                <div className="flex justify-between mt-[19px]">
                  <div className="flex gap-[10px]">
                    <input type={"checkbox"} />
                    <label className="text-[12px]">Remember me</label>
                  </div>
                  <p className="text-[12px]">Forget Password</p>
                </div>
              </div>

              <div className="flex flex-col xsm:items-center">
                {/* <Link to={"/dashboard"}> */}
                {loading ? (
                  <Button
                    whileHover={{
                      background: "#fff",
                      border: "3px solid #FB4A04",
                      color: "#FB4A04",
                    }}
                    width="27.608069164265128vw"
                    height="57px"
                    text="Loging In..."
                    style={{
                      background: "#FB4A04",
                      color: "#fff",
                      marginTop: "25px",
                      minWidth: "100%",
                    }}
                    onClick={LoginUser}
                  />
                ) : (
                  <Button
                    whileHover={{
                      background: "#fff",
                      border: "3px solid #FB4A04",
                      color: "#FB4A04",
                    }}
                    width="27.608069164265128vw"
                    height="57px"
                    text="LogIn"
                    style={{
                      background: "#FB4A04",
                      color: "#fff",
                      marginTop: "25px",
                      minWidth: "100%",
                    }}
                    onClick={LoginUser}
                  />
                )}

                {/* </Link> */}
                <Link to={"/signup"} className="min-w-[100%]">
                  <Button
                    whileHover={{
                      background: "#FB4A04",
                      border: "3px solid #FB4A04",
                      color: "#fff",
                    }}
                    width="27.608069164265128vw"
                    height="57px"
                    text="SignUp"
                    style={{
                      background: "#fff",
                      color: "#FB4A04",
                      border: "1px solid #473a3a",
                      marginTop: "20px",
                      minWidth: "100%",
                    }}
                  />
                </Link>
              </div>
              <div className="flex justify-between items-center mt-[17px] xsm:gap-[5px]">
                <div className="min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]">
                  {" "}
                </div>
                <p className="font-[400] text-[12px] leading-[19px] text-[#918a8a]">
                  or Login with
                </p>
                <div className="min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]">
                  {" "}
                </div>
              </div>

              <div className="flex justify-between my-[10px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]"
                >
                  <LazyImage alt="" src="/facebook.png" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={loginAsGoogle}
                  className="rounded-[10px] cursor-auto flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]"
                >
                  <LazyImage alt="" src="/google.png" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]"
                >
                  <LazyImage alt="" src="/apple.png" />
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
