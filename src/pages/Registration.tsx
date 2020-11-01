import React from "react";
import { useState } from "react";
import { getAxios } from "../axios/client";

export const Registration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChangeUsername(e: any) {
    setIsSubmitted(false);
    setUserName(e.target.value);
  }

  function handleChangePassword(e: any) {
    setIsSubmitted(false);
    setPassword(e.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const postData = async () => {
      const response = await getAxios().post("/auth/register", {});
      console.log(response.data);

      setIsSubmitted(true);
    };
    postData();
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User name:
          <input type="text" name="userName" onChange={handleChangeUsername} />
        </label>
        <div />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChangePassword}
          />
        </label>
        <div />
        <input type="submit" value="Submit" />
      </form>
      {isSubmitted && (
        <>
          <div />
          <label>Username: {userName}</label>
          <div />
          <label>Password: {password}</label>
        </>
      )}
    </>
  );
};
