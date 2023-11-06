import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      {/* <p className={css.statistics_title}>Statistics</p> */}

      <ul className={css.statistics_list}>
        <li className={css.statistics_item}>
          <p className={css.statistics_text}>Good: {good}</p>
        </li>
        <li className={css.statistics_item}>
          <p className={css.statistics_text}>Neutral: {neutral}</p>
        </li>
        <li className={css.statistics_item}>
          <p className={css.statistics_text}>Bad: {bad}</p>
        </li>
        <li className={css.statistics_item}>
          <p className={css.statistics_text}>Total: {total}</p>
        </li>
        <li className={css.statistics_item}>
          <p className={css.statistics_text}>
            Positive feedback: {positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
