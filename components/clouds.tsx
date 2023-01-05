import s from "../styles/clouds.module.scss";

const Clouds = () => {

  return (
    <div className={s.sky}>
        <div className={s.cloud_1}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_2}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_3}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_4}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_5}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_6}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_7}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_8}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
        <div className={s.cloud_9}>
          <img src="/cloud.png" alt="cloud" width='100%' />
        </div>
    </div>
  );
};

export default Clouds;
