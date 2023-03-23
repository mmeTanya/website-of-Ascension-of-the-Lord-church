import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import s from "../styles/aboutSermons.module.scss";
import Button from "../components/button";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const AboutSermons = () => {

  const [sermons, setSermons] = useState([])
  const [page, setPage] = useState(2)
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    onloadSermons()
  }, []);

  const onloadSermons = async () => {
    try {
      const response = await fetch('/api/info-sermons')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.sermons.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      const firstPage = result.sermons.slice(0, 7)
      setSermons(firstPage)
      console.log(sermons)
      setStatus(Status.RESOLVED)
      if (result.sermons.length > 7) {
        setShowButton(true)
      }
      console.log(page)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  const onLoadNext = async () => {
    setShowButton(false)
    setPage((prevState) => prevState + 1)
    console.log(page)
    try {
      const response = await fetch('/api/info-sermons')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.sermons.length === 0) {
        return
      }
      const nextPage = result.sermons.slice(7 * page - 7, 7 * page)
      setSermons([...sermons, ...nextPage])
      console.log(sermons)
      setStatus(Status.RESOLVED)
      if (page >= Math.ceil(result.sermons.length / 7)) {
        setShowButton(false);
      } else {
        setShowButton(true)
      }
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }


  return (
    <section className={s.sermons} >
      <h1 className={s.sermons__title}>
        Проповіді
      </h1>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <p className={s.sermons_item__text}>На даний час інформація відсутня</p>}
      {status === Status.RESOLVED &&
        <ul>
          {sermons && sermons.map(item =>
          (<li key={uuidv1()} className={s.sermons_item}>
            <div className={s.sermons_item__cover}>
              {item.title && <h2 className={s.sermons_item__title}>{item.title}</h2>}
              <div className={s.sermons_item__img_cover}>
                {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.sermons_item__img} />))}
                {item.video && item.video.map(el => (<iframe key={uuidv1()} src={el.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={s.news_item__video}></iframe>))}
              </div>
              {item.text && item.text.map(el => (<p key={uuidv1()} className={s.sermons_item__text}>{el.p}</p>))}
              {item.link && item.link.map(el => (<a key={uuidv1()} href={el.href} className={s.sermons_item__link}>{el.p}</a>))}
              {item.date && <p className={s.sermons_item__date}>{item.date}</p>}
            </div>
            <Link legacyBehavior href={`/sermons/${item._id}`}>
              <a id="link" className={s.news_item__link} > Показати повний текст </a>
            </Link>
          </li>)
          )}
        </ul>
      }
      {showButton && <Button theme={'no_animate'} onClick={onLoadNext} type={'button'} text={'Завантажити ще'} />}
    </section>
  );
};

export default AboutSermons;
