import styles from "./Quotebox.module.css";

function Quotebox({ quote, author }) {
  return (
    <div id="quote-box" className={styles.quoteContainer}>
      <div id="quote-container">
        <p id="text" className={styles.quoteText}>{quote}</p>
        <span id="author" className={styles.quoteAuthor}> {author}</span>
      </div>
      <hr></hr>
      <div>
        <button id="new-quote">New Quote</button>
        <a id="tweet-quote">twitter</a>
      </div>
    </div>
  );
}

export default Quotebox;
