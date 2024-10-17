import navStyle from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.navbarlogo}>
        <Image src="/logoWhite.png" alt="logo" width={150} height={80} />
      </div>
      <div>
        <ul className={navStyle.navbarMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Works</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <button className={navStyle.navbarCta}>Let's talk</button>
    </nav>
  );
};

export default Navbar;
