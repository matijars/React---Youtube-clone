import React from "react";
import "./Chipsbar.css";

import Chips from "./Chips";

function Chipsbar() {
  return (
    <div className='chipsbar'>
      <Chips title='All' activeChip={true} />
      <Chips title='Chill-out-music' />
      <Chips title='Jeremy Soule' />
      <Chips title='NBA' />
      <Chips title='Ambient Music' />
      <Chips title='CSS' />
      <Chips title='JavaScript' />
      <Chips title='Trailers' />
      <Chips title='Pop Music' />
      <Chips title='Recently Uploaded' />
      <Chips title='Live' />
      <Chips title='Computer Science' />
      <Chips title='First Take' />
      <Chips title='HTML' />
    </div>
  );
}

export default Chipsbar;
