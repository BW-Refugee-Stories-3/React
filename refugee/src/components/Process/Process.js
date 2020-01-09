import React from "react";
import { useGetProcess } from "../../store";
import Item from "./Item/Item";
import "./Process.scss";

export default function Process() {
  const [process] = useGetProcess();

  return (
    <div className="process">
      {process.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
