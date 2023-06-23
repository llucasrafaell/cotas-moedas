import React from "react";

type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="button">{title}</button>;
};

export default Button;
