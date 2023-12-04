import React, { useState } from "react";

const headerNav = [
  {
      title: "intro",
      url: "#intro"
  },
  {
      title: "skill",
      url: "#skill"
  },
  {
      title: "site",
      url: "#site"
  },
  {
      title: "portfolio",
      url: "#port"
  },
  {
      title: "contact",
      url: "#contact"
  }
];

const Header = () => {
    const [show, setShow] = useState(false);
    
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow) //true가 되면 false가 되고, false가 되면 true가 되어라
    }

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio<em>react.js</em></a>
                </div>
                <nav
                    className={`header__nav ${show ? "show" : ""}`}
                    role="navigation"
                    aria-label="메인메뉴">
                    <ul>
                       {headerNav.map((nav, key) => ( //nav는 내맘대로 지정한 변수
                        <li key={key}>
                          <a href={nav.url}>{nav.title}</a>
                        </li>
                       ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button"  
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;