import React, { useState } from "react";
const Nav = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const iconClick = (index) => {
    setActiveIcon(index);
  };

  return (
    <>
      <nav>
        <div
          className={`icons ${activeIcon === 0 ? "active" : ""}`}
          onClick={() => iconClick(0)}
        >
          <i className="ri-home-4-fill"></i>
        </div>
        <div
          className={`icons ${activeIcon === 1 ? "active" : ""}`}
          onClick={() => iconClick(1)}
        >
          <i className="ri-search-2-line"></i>
        </div>
        <div
          className={`icons ${activeIcon === 2 ? "active" : ""}`}
          onClick={() => iconClick(2)}
        >
          <i className="ri-folder-5-fill"></i>
        </div>
        <div
          className={`icons ${activeIcon === 3 ? "active" : ""}`}
          onClick={() => iconClick(3)}
        >
          <i className="ri-account-circle-line"></i>
        </div>
      </nav>
    </>
  );
};

export default Nav;
