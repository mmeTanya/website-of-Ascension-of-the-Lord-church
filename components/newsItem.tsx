import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from './loader'
import s from "../styles/molytvy.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


const NewsItem = ({ newsId }) => {

  const [news, setNews] = useState([])
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    onloadMolytvy()
  }, []);

  const onloadMolytvy = async () => {

    try {
      const response = await fetch('/api/news-id?id=' + newsId)
      setStatus(Status.PENDING)
      const result = await response.json()
      console.log(result)
      setNews(result)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.molytvy} >
      <h2 className={s.molytvy__title}>
        molytvy
      </h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        <div>
          {news &&
            <div className={s.molytvy_item}>
              {news.title && <h2 className={s.molytvy_item__title}>{news.title}</h2>}
              < div className={s.molytvy_item__img_cover}>
                {news.image && news.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.molytvy_item__img} />))}
                {news.video && news.video.map(el => (<iframe key={uuidv1()} src={el.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={s.molytvy_item__video}></iframe>))}
              </div>
              {news.text && news.text.map(el => (<p key={uuidv1()} className={s.molytvy_item__text}>{el.p}</p>))}
              {news.date && <p className={s.molytvy_item__date}>{news.date}</p>}
            </div>}
        </div>
      }
    </section >
  );
};

export default NewsItem;
