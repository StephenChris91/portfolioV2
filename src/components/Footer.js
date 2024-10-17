import footerStyle from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="footerColumn1">
        <Image src="/logo2.png" alt="logo" width={200} height={100} />
      </div>
      <div className="footerColumn">
        <ul className={footerStyle.footerColumn2}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Works</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <div>
        <p className={footerStyle.rights}>
          All Rights Reserved{" "}
          <span className={footerStyle.name}>Stephen Chris</span> 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
