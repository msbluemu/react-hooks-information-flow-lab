import React, { useState } from "react";

function Header({onDarkModeClick}){
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}


export default Header;