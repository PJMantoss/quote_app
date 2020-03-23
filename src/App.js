import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import Social from './components/Social';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount(){
    this.getQuote();
  }

  getQuote(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(url)
        .then(res => {
          let data = res.data.quote;
          let quoteNum = Math.floor(Math.random() * data.length);
          let randomQuote = data[quoteNum];

          this.setState({
            quote: randomQuote['quote'],
            author: randomQuote['author']
          })
        });
  }

  getNewQuote = () => {
    this.getQuote;
  }


  render() {
    const {quote, author} = this.state;

    return (
      <div className="App" id="wrapper">
        <h1 className="title">Random Quote App</h1>
        <div id="quote-box">
          <QuoteBox/>
          <div id="buttons">
            <Social/>
            <Button/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
