import React, { Component } from "react";
import DisplayQuote from "./components/DisplayQuote";
import GenerateButton from "./components/GenerateButton";
import { quoteList } from "./quoteList";
import { getRandomQuote } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: getRandomQuote(),
    };
  }

  getNewQuote = () => {
    this.setState({
      currentQuote: getRandomQuote(),
    });
  };

  render() {
    console.log(quoteList.length);
    console.log(this.state);
    const { currentQuote } = this.state;
    return (
      <div className="container vh-100 align-items-center">
        <div className="row">
          <div className="col-12">
            <DisplayQuote quoteToDisplay={currentQuote} />
          </div>
          <div className="col mt-2">
            <GenerateButton handleClick={this.getNewQuote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
