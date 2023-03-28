import { useEffect, useState } from 'react'
import Nav from "./nav";
import MobileNav from "./mobile-nav";
import { useMediaQuery } from "react-responsive";
import s from "../styles/header.module.scss";

const Header = () => {

  return (
    <header className={s.page_header}>
      <Nav />
      <MobileNav />
    </header>
  );
};

export default Header;
