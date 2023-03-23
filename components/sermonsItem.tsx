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


const SermonsItem = ({ sermonsId }) => {

  const [sermons, setSermons] = useState([])
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    onloadSermons()
  }, []);

  const onloadSermons = async () => {

    try {
      const response = await fetch('/api/info-sermons-id?id=' + sermonsId)
      setStatus(Status.PENDING)
      const result = await response.json()
      console.log(result)
      setSermons(result)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.molytvy} >
      <h2 className={s.molytvy__title}>
        sermons
      </h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        <div>
          {sermons &&
            <div className={s.molytvy_item}>
              {sermons.title && <h2 className={s.molytvy_item__title}>{sermons.title}</h2>}
              < div className={s.molytvy_item__img_cover}>
                {sermons.image && sermons.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.molytvy_item__img} />))}
                {sermons.video && sermons.video.map(el => (<iframe key={uuidv1()} src={el.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={s.molytvy_item__video}></iframe>))}
              </div>
              {sermons.text && sermons.text.map(el => (<p key={uuidv1()} className={s.molytvy_item__text}>{el.p}</p>))}
              {sermons.date && <p className={s.molytvy_item__date}>{sermons.date}</p>}
            </div>}
        </div>
      }
    </section >
  );
};

export default SermonsItem;
