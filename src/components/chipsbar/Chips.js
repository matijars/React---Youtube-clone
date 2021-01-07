import React from "react";
import "./Chips.css";

export default function Chips({ title, activeChip }) {
  function handleClick(e) {
    let chip = e.target;
    let chips = document.querySelectorAll(".chips");

    chips.forEach((chip) => {
      chip.classList.remove("chips-active");
    });

    chip.classList.add("chips-active");
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`chips ${activeChip && "chips-active"}`}
        title={title}
      >
        {title}
      </button>
    </div>
  );
}
