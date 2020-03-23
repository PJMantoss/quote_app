import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
