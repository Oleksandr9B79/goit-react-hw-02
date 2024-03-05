import css from "./Options.module.css";

function Options({ updateFeedback, resetFeedback, totalFeedback = 0 }) {
  return (
    <ul className={css.btn}>
      <li>
        <button onClick={() => {
            updateFeedback("good");
          }}>Good</button>
      </li>
      <li>
        <button onClick={() => {
            updateFeedback("neutral");
          }}>Neutral</button>
      </li>
      <li>
        <button onClick={() => {
            updateFeedback("bad");
          }}>Bad</button>
      </li>
      {totalFeedback !== 0 && (
        <li>
          <button onClick={() => {
              resetFeedback();
            }}>Reset</button>
        </li>
      )}
    </ul>
  );

}

export default Options;
