import React from "react";
import { useEffect, useRef, useState } from "react";
import "./styles/index.less";

function NavMenu3D() {
  return (
    <div className="page_navMenu3D_box">
      <ul>
        <li style={{ "--i": 6 }}>
          <a href="#">Home</a>
        </li>
        <li style={{ "--i": 5 }}>
          <a href="#">About</a>
        </li>
        <li style={{ "--i": 4 }}>
          <a href="#">Services</a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#">Price</a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#">Our Team</a>
        </li>
        <li style={{ "--i": 1 }}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default NavMenu3D;
