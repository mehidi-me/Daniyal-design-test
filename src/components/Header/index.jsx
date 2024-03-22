"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((pre) => !pre);
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <nav className={showMenu ? `top-nav active` : `top-nav`}>
          <Link onClick={toggleMenu} href={"/"}>Home</Link>
          <Link onClick={toggleMenu} href={"/about"}>About us</Link>
          <a onClick={toggleMenu} href="#">Contact</a>
          <a onClick={toggleMenu} href="#">Policyholder Portal</a>
          <button onClick={toggleMenu} className="btn">Report a Claim</button>
        </nav>
        <div className="menu" onClick={toggleMenu}>
          {showMenu ? (
            <img src="/icons/x-mark.svg" alt="" />
          ) : (
            <img src="/icons/bars-3-bottom-right.svg" alt="" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
