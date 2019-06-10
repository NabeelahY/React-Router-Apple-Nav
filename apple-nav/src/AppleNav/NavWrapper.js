import React from "react";
import Nav from "./Nav";

export default function NavWrapper({ links }) {
  return (
    <div>
      <Nav url="https://www.apple.com" />
      {links.map(link =>(
        <Nav url='#' text={link.name} />
      ))}
    </div>
  );
}
