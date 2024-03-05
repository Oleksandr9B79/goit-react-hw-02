import css from "./Feedback.module.css"

function Feedback({ good = 0, neutral = 0, bad = 0 }) {

  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <p className={css.text}>{`Good: ${good}`}</p>
      <p className={css.text}>{`Neutral: ${neutral}`}</p>
      <p className={css.text}>{`Bad: ${bad}`}</p>
      {totalFeedback && <p className={css.total}>{`Total: ${totalFeedback}`}</p>}
      {totalFeedback && (
        <p className={css.total}>{`Positive: ${Math.round(((good + neutral) / totalFeedback) * 100)}%`}</p>
      )}
    </div>
  );
}
export default Feedback;
