import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, location, date, textbody, approved } = item;

  return (
    <Link className="process-item" to={`/process/${item.id}`}>
      <div>Name: {name}</div>
      <div>Location: {location}</div>
      <div>Data: {date}</div>
      <div>Status: {approved ? "Approved" : "Denied"}</div>
      <div>Story:</div>
      <div className="text">{textbody}</div>
    </Link>
  );
}
