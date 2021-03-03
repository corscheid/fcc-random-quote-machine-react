import React from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [quote, setQuote] = React.useState({});
  const [quoteList, setQuoteList] = React.useState([]);
  const [tweetURL, setTweetURL] = React.useState("");

  const getNewQuote = () => {
    const idx = Math.floor(Math.random() * quoteList.length);
    const newQuote = quoteList[idx];
    setQuote(newQuote);
  };

  const fetchData = async () => {
    const quotesURL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = await fetch(quotesURL);
    const quotes = await response.json();
    const idx = Math.floor(Math.random() * quotes.quotes.length);
    const newQuote = quotes.quotes[idx];
    setQuoteList(quotes.quotes);
    setQuote(newQuote);
    setTweetURL(
      `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${newQuote.quote} --${newQuote.author}`
    );
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div id="loading">
        <h1>loading...</h1>
      </div>
    );
  } else {
    return (
      <QuoteBox quote={quote.quote} author={quote.author}>
        <div className="btn-row">
          <button
            className="btn btn-primary"
            id="new-quote"
            onClick={getNewQuote}
          >
            New quote
          </button>
          <a
            id="tweet-quote"
            href={tweetURL}
            target="_top"
            className="btn btn-secondary"
          >
            <i className="fa fa-twitter"></i>
            Tweet
          </a>
        </div>
      </QuoteBox>
    );
  }
};

export default App;
