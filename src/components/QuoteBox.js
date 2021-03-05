import "./QuoteBox.scss";

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <h1 id="text">
        <i className="fa fa-quote-left"></i> {props.quote}
      </h1>
      <p id="author">- {props.author}</p>
      <div className="btn-row">
        <button
          className="btn btn-primary"
          id="new-quote"
          onClick={props.getNewQuote}
        >
          New quote
        </button>
        <a
          id="tweet-quote"
          href={props.tweetURL}
          target="_top"
          className="btn btn-secondary"
        >
          <i className="fa fa-twitter"></i> Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
