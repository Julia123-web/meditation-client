import React from "react";

export default function QuotesList(props) {
  console.log("---the quotes---", props);
  if (!props.quotes) return <di>Loading...</di>;
  return (
    <div className="quotes">
      <br />
      <h1 className="quotes-style">Quotes To Motivate Yourself</h1>
      <div className="quotes-container">
        {props.quotes.map(quote => {
          return (
            <div className="quotes-item" key={quote.id}>
              <p>{quote.quotes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
