import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import s from "../styles/aboutArchpriest.module.scss";


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const AboutArchpriest = () => {
  const [info, setInfo] = useState(null)
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    onLoadInfo()
  }, []);

  const onLoadInfo = async () => {
    try {
      const response = await fetch('/api/info-archpriest')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.info.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setInfo(result.info)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.archpriest} >
      <div className={s.archpriest__img_cover}>
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && <article  >
          {info && info.map(item => <div key={uuidv1()}>
            {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.archpriest__img} />))}
          </div>)}
        </article>
        }
      </div>
      <div className={s.archpriest__text_cover}>
        <h1 className={s.archpriest__title}>
          Протоієрей Сергій Більченко
        </h1>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <p className={s.archpriest__text}>На даний час інформація відсутня</p>}
        {status === Status.RESOLVED && <div>
          {info && info.map(item => <div key={uuidv1()}>
            {item.text && item.text.map(el => <p key={uuidv1()} className={s.archpriest__text}>{el.p}</p>
            )}</div>)}
        </div>
        }
      </div>
    </section>
  );
};

export default AboutArchpriest;
