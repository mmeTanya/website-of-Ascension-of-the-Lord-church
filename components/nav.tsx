import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/header.module.scss";

const NavLinks = [
  { id: 1, title: "Головна", path: "/" },
  { id: 2, title: "Про парафію", path: "/about-the-parish" },
  { id: 3, title: "Розклад Богослужінь", path: "/services" },
  { id: 4, title: "Проповіді", path: "/sermons" },
  { id: 5, title: "Молитовник", path: "/molytovnyk" },
  { id: 6, title: "Онлайн послуги", path: "/online-services" },
  { id: 7, title: "Пожертва", path: "/donate" },
];

const Nav = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          {NavLinks.map((NavLink) => (
            <li className={s.nav__item} key={NavLink.id}>
              <Link legacyBehavior href={NavLink.path}>
                <a id="link"
                  className={
                    router.pathname === NavLink.path
                      ? s.nav_active_link
                      : s.nav__link
                  }
                >
                  {NavLink.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Nav;
