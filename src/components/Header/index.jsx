import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <nav className="top-nav">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About us</Link>
          <a href="#">Contact</a>
          <a href="#">Policyholder Portal</a>
          <button className="btn">Report a Claim</button>
        </nav>
        <div className="menu">
          <img src="/icons/bars-3-bottom-right.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
