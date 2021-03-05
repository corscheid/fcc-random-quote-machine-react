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

  return loading ? (
    <div id="loading">
      <h1>loading...</h1>
    </div>
  ) : (
    <QuoteBox
      quote={quote.quote}
      author={quote.author}
      getNewQuote={getNewQuote}
      tweetURL={tweetURL}
    />
  );
};

export default App;
