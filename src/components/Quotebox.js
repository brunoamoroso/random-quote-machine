import Button from "./Button";
import IconButton from "./IconButton";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "./Quotebox.module.css";

function Quotebox({ quote, author, color, handleNewQuote}) {
  return (
    <div id="quote-box" className={styles.quoteContainer}>
      <div id="quote-text-container" className={styles.quoteTextContainer}>
        <div id="text" className={styles.quoteText} >
          <i style={{marginTop: '10px', color:color}}><FaQuoteLeft /></i>
          <p id="text" className={styles.quoteContent}>
            {quote}
          </p>
          <i style={{display:'flex', alignItems: 'flex-end', marginBottom: '10px', color:color}}>
          <FaQuoteRight />
          </i>
        </div>
        <span id="author" className={styles.quoteAuthor}>
          {author}
        </span>
      </div>
      <hr className={styles.quoteDivider}></hr>
      <div className={styles.quoteActions}>
        <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank" rel="noreferrer">
          <IconButton icon={<FaTwitter />} color={color} />
        </a>
        <Button name={"new-quote"} text={"New Quote"} color={color} handleClick={handleNewQuote}/>
      </div>
    </div>
  );
}

export default Quotebox;
