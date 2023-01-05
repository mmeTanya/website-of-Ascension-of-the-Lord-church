import Nav from "./nav";
import MobileNav from "./mobile-nav";
import { useMediaQuery } from "react-responsive";
import s from "../styles/header.module.scss";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <header className={s.page_header}>
      {isMobile ? <MobileNav /> : <Nav />}
    </header>
  );
};

export default Header;
