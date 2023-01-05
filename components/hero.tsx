import Link from "next/link";
import { Fade } from "react-awesome-reveal"
import s from "../styles/hero.module.scss";


const Hero = () => {

  return (
    <section className={s.hero}>
     <div className={s.hero__image_cover}>
    <img src="/voznesinnia3.png" alt="God" width='100%' className={s.hero__image} />
     </div>
      <div className={s.hero__title}>
      <Fade delay={4000} className={s.hero__text_cover} triggerOnce={true}>
        <p className={s.hero__text} > 
        Прийдіть до Мене всі струдженi і обтяжені
        </p>
      </Fade>
      <Fade delay={5000} className={s.hero__text_cover} triggerOnce={true}>
        <p className={s.hero__text} >  
        і Я заспокою Вас
        </p>
      </Fade>
      <Fade delay={6000} className={s.hero__text_cover} triggerOnce={true}>
        <p className={s.hero__text} >  
        Євангеліє від Матвія 11,27 : 30
        </p>
      </Fade>
      </div>
    </section>
  );
};

export default Hero;
