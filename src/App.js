import React, { Component } from "react";
import DisplayQuote from "./components/DisplayQuote";
import GenerateButton from "./components/GenerateButton";
import { quoteList } from "./quoteList";
import { getRandomQuote } from "./utils";
import PreviousQuoteButton from "./components/DisplayPreviousQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//add quote, back button, fade in/ fade out animations// auto-generate timer

//Sunday: previous quote button goes through all the quotes, change so when at top of list, current quote gets added to prev quote list
//Change so even when new quote is added, the previous index counter is saved in state maintaining order of quotes when back button is clicked
//display all quotes, highlight current, and previous index quote.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: getRandomQuote(),
      previousQuotes: [],
      prevIndex: -1,
      topOfList: true,
    };
  }

  addPrevQuote = () => {
    //adds current quote to previous quote list
    let { currentQuote, previousQuotes: previousQuotesCopy } = this.state;
    previousQuotesCopy.push(currentQuote);
    return previousQuotesCopy;
  };

  getNewQuote = () => {
    // let prevQuote = this.state.currentQuote;
    // let previousQuotesCopy = this.state.previousQuotes;
    // previousQuotesCopy.push(prevQuote);

    this.setState({
      currentQuote: getRandomQuote(),
      previousQuotes: this.addPrevQuote(),
      prevIndex: -1, //as of now, generating new quote resets the index tracker to default
    });
  };

  displayPreviousQuote = () => {
    let { previousQuotes, prevIndex: prevIndexCopy } = this.state;
    if (prevIndexCopy === -1) {
      // if back button hasnt been clicked or has been reset, start counting back.
      prevIndexCopy = previousQuotes.length - 1;
    } else {
      prevIndexCopy--;
    }

    let prevQuoteToDisplay = previousQuotes[prevIndexCopy];

    this.setState({
      currentQuote: prevQuoteToDisplay,
      prevIndex: prevIndexCopy,
      //previousQuotes: this.addPrevQuote(),
    });
  };

  render() {
    console.log(quoteList.length);
    console.log(this.state);
    const { currentQuote } = this.state;
    return (
      <div className="container-custom">
        <div className="display-box">
          <DisplayQuote quoteToDisplay={currentQuote} />
        </div>
        <div className="button">
          <GenerateButton handleClick={this.getNewQuote} />
          <PreviousQuoteButton handleClick={this.displayPreviousQuote} />
        </div>
      </div>
    );
  }
}

export default App;
