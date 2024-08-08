import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <footer className=" mt-auto bg-black text-white text-center py-2">
        {date.getFullYear()}
        <span> </span>
        <a href="https://mms-it.com" className="underline text-gray-400">
          MMS IT
        </a>
        <span> . All rights reserved.</span>
      </footer>
    </Container>
  );
};

export default Footer;
