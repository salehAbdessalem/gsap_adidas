"use client"
import clsx from "clsx";
import { useParams } from "next/navigation";

const Footer = () => {
    const color = useParams()?.slug === "white" ? "text-black" : "text-white";
  return (
    <div
      className={clsx("fixed flex justify-start items-center md:gap-5 bottom-2 md:px-20 px-5 md:text-xs text-[10px] md:tracking-widest text-nowrap", color)}
    >
      <p className="hover-animation">© 2025 ADIDAS AG</p>
      <p className="hover-animation">TERMS & CONDITIONS</p>
      <p className="hover-animation">PRIVACY</p>
      <p className="hover-animation">COOKIES</p>
    </div>
  );
};

export default Footer;
