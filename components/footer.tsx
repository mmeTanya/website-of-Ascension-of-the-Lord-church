import s from "../styles/footer.module.scss";

const Footer = () => {

  return (
    <footer className={s.page_footer}>
      <div className={s.container_union}>
        <div className={s.contact_container}>
          <h2 className={s.page_footer__title}>Свято-Вознесенський храм</h2>
          <a href="https://goo.gl/maps/F8HtsvvBLD5XEcSb9" className={s.page_footer__contact_link}>
            <p>провулок Ярмарочний, 57</p>
            <p>Охтирка, Сумська область</p>
          </a>
        </div>
        <div className={s.join_us}>
          <h3 className={s.page_footer__title_2}>Приєднуйтеся до нас</h3>
          <a className={s.join_us__facebook} href="https://www.facebook.com/profile.php?id=100068009384945" />
        </div>
      </div>
    </footer>

  );
};

export default Footer;
