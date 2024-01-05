import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      <Socials />
        <div style={{ paddingLeft: '9px' }} >
        {" "}
        <Link href="https://github.com/akfink314/react-portfolio">
          <a className="underline underline-offset-1">Git repo and original source code</a>
        </Link>
        ❤
        </div>
      </h1>
    </>
  );
};

export default Footer;
