import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map(option => (
    <button
      type="button"
      className={css.feedback_buttons}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}{' '}
    </button>
  ));
};

export default FeedbackOptions;
