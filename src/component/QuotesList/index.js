import React from "react";

export default function QuotesList(props) {
  console.log("---the quotes---", props);
  if (!props.quotes) return <di>Loading...</di>;
  return (
    <div>
      <h1>Quotes To Motivate Yourself</h1>
      {props.quotes.map(quote => {
        return (
          <div key={quote.id}>
            <p>{quote.quotes}</p>
          </div>
        );
      })}
    </div>
  );
}
