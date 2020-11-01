import React from "react";

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <p style={style}>{message}</p>;
};

type Props = {
  message: string;
};

const style: React.CSSProperties = {
  color: "red",
};
