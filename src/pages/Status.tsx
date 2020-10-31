import React from "react";
import { useState } from "react";
import { getAxios } from "../axios/client";

export const Status = () => {
  const [serverStatus, setServerStatus] = useState("Loading...");
  const [dbStatus, setDbStatus] = useState("Loading...");

  getAxios()
    .get("/status")
    .then((value) => {
      const { ok, db } = value.data;
      setServerStatus(ok ? "ok" : "Failed to connect");
      setDbStatus(db);
    })
    .catch((err) => {
      setServerStatus("Failed to connect");
      setDbStatus("Failed to connect");
    });

  return (
    <>
      <h2>Status</h2>
      <div />
      <h3>Server URL: {process.env.REACT_APP_SERVER_HOST}</h3>
      <div />
      <h3>Server status: {serverStatus}</h3>
      <div />
      <h3>Database status: {dbStatus}</h3>
    </>
  );
};
