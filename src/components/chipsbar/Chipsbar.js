import React from "react";
import "./Chipsbar.css";

import Chips from "./Chips";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Chipsbar() {
  var settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    outerEdgeLimit: true,
    arrows: false,
  };
  return (
    <div className='chipsbar'>
      <Slider className='slide' {...settings}>
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
        <Chips title='Instrumentals' />
        <Chips title='Website' />
        <Chips title='Nature' />
        <Chips title='Cars' />
      </Slider>
    </div>
  );
}

export default Chipsbar;
