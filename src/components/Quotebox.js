import styles from "./Quotebox.module.css";

function Quotebox({ quote, author }) {
  return (
    <div id="quote-box" className={styles.quoteContainer}>
      <div id="quote-text-container" className={styles.quoteTextContainer}>
        <p id="text" className={styles.quoteText}>{quote}</p>
        <span id="author" className={styles.quoteAuthor}> {author}</span>
      </div>
      <hr className={styles.quoteDivider}></hr>
      <div className={styles.quoteActions}>
        <a id="tweet-quote">twitter</a>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default Quotebox;
