const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <h1 id="text">
        <i className="fa fa-quote-left"></i> {props.quote}
      </h1>
      <p id="author">- {props.author}</p>
      {props.children}
    </div>
  );
};

export default QuoteBox;
