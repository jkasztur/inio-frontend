import React, { useEffect } from "react";
import { useState } from "react";
import { getAxios } from "../axios/client";

export const Status: React.FC = () => {
  const [serverStatus, setServerStatus] = useState("Loading...");
  const [dbStatus, setDbStatus] = useState("Loading...");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxios().get("/status");
        const { ok, db } = response.data;
        setServerStatus(ok ? "ok" : "Failed to connect");
        setDbStatus(db);
      } catch (err) {
        setServerStatus("Failed to connect");
        setDbStatus("Failed to connect");
      }
    };
    fetchData();
  }, []);

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
