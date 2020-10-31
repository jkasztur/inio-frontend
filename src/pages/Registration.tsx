import React from "react";
import { useState } from "react";

export const Registration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChangeUsername(e: any) {
    console.log(e.target.value);
    setIsSubmitted(false);
    setUserName(e.target.value);
  }

  function handleChangePassword(e: any) {
    setIsSubmitted(false);
    setPassword(e.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setIsSubmitted(true);
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
