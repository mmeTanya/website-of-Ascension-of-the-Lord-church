import { useState } from 'react';
import Button from "../components/button";
import s from "../styles/form-order.module.scss";


const FormForCandlesNotes = ({ type }) => {
  const [select, setSelect] = useState('alive');
  const [comments, setComments] = useState('');
  const [answer, setAnswer] = useState('');
  const [errorsSubmit, setErrorsSubmit] = useState({ comments: '' });


  const handleChange = ({ target: { name, value } }) => {
    setErrorsSubmit({
      comments: '',
    });
    switch (name) {
      case 'select':
        return setSelect(value);
      case 'comments':
        return setComments(value);
      default:
        return;
    }
  }

  const regexComments = /^[a-z ,.'-]+$/i

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      select: select,
      comments: comments,
      date: new Date()
    }

    if (!regexComments.test(comments)) {
      setErrorsSubmit({
        comments: 'wrong'
      });
      return
    }
    if (comments === '') {
      setErrorsSubmit({
        comments: 'required'
      });
      return
    }

    let response = null

    if (type === "candles") {
      response = await fetch('/api/form-candles', {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors'
      })

    } else if (type === "notes") {
      response = await fetch('/api/form-notes', {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors'
      })

    }

    const result = await response.json()
    setAnswer('Запит прийнято');
    reset()
  }

  const reset = () => {
    setTimeout(() => {
      setSelect('alive');
      setComments('');
      setAnswer('');
    }, 2000);
  };

  return (
    <form className={s.form_info} onSubmit={handleSubmit} autoComplete="off">
      <div className={s.form_info__form_field}>
        <select name="select" value={select} onChange={handleChange} className='select'>
          <option value="alive">за здоров`я</option>
          <option value="dead">за упокій</option>
        </select>
      </div>
      <div className={s.form_info__form_field}>
        <label className={s.form_info__label} htmlFor="comments">
          Імена
        </label>
        <textarea
          className={errorsSubmit.comments === 'required' || errorsSubmit.comments === 'wrong' ? s.form_info__comments_red : s.form_info__comments}
          name="comments"
          id="comments"
          placeholder="Напишіть імена"
          value={comments}
          onChange={handleChange}
        >
        </textarea>
        {errorsSubmit.comments === 'required' && <p className={s.form_info__error}>Напишіть імена </p>}
      </div>
      <div className={s.form_info__button}>
        <Button theme={'no_animate'} type={'submit'} text={'Надіслати'} />
      </div>
      <p className={s.form_info__answer}>{answer}</p>
    </form>
  );
};

export default FormForCandlesNotes;
