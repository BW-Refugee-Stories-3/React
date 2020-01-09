import React from "react";
import "./Footer.scss";

export default function Footer() {
  const date = new Date();
return <div className="footer">©Refugee {date.getFullYear()}</div>;
}
