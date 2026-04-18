import React from "react";

function Header({ name, role }) {
  return (
    <div className="bg-dark text-white text-center p-4">
      <h1>{name}</h1>
      <h4>{role}</h4>
    </div>
  );
}

export default Header;