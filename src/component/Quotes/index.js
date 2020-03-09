import React, { Component } from "react";
import { connect } from "react-redux";
import { quotesFetched } from "../../actions/quotes";
import QuotesList from "../QuotesList";

class quotesContainer extends Component {
  state = {
    quotes: ""
  };

  componentDidMount() {
    console.log("quotes container props", this.props);
    this.props.quotesFetched();
  }

  render() {
    return (
      <div>
        <QuotesList quotes={this.props.quotes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("quotes container mapStateToProps state", state);
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps, { quotesFetched })(quotesContainer);
