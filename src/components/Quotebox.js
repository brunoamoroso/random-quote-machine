import Button from "./Button";
import IconButton from "./IconButton";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "./Quotebox.module.css";

function Quotebox({ quote, author, color }) {
  return (
    <div id="quote-box" className={styles.quoteContainer}>
      <div id="quote-text-container" className={styles.quoteTextContainer}>
        <p id="text" className={styles.quoteText}>
          <FaQuoteLeft />
          {quote}
          <FaQuoteRight />
        </p>
        <span id="author" className={styles.quoteAuthor}>
          {" "}
          {author}
        </span>
      </div>
      <hr className={styles.quoteDivider}></hr>
      <div className={styles.quoteActions}>
        <a id="tweet-quote" href="/">
          <IconButton icon={<FaTwitter />} color={color}/>
        </a>
        <Button name={"new-quote"} text={"New Quote"} color={color} />
      </div>
    </div>
  );
}

export default Quotebox;
