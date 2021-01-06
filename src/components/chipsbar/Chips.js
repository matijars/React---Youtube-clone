import React from "react";
import "./Chips.css";

export default function Chips({ title, activeChip }) {
  return (
    <div>
      <button className={`chips ${activeChip && "chips-active"}`}>{title}</button>
    </div>
  );
}
