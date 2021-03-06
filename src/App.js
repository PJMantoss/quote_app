import React, { Component } from 'react';
import ReactFCCtest from 'react-fcctest';
import './App.css';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import Social from './components/Social';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount(){
    this.getQuote()
  }

  getQuote(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(url)
        .then(res => {
          let data = res.data.quotes;
          let quoteNum = Math.floor(Math.random() * data.length);
          let randomQuote = data[quoteNum];

          this.setState({
            quote: randomQuote['quote'],
            author: randomQuote['author']
          })
        })
  }

  getNewQuote = () => {
    this.getQuote();
  }


  render() {
    const { quote, author } = this.state;

    return (
      <div className="App" id="wrapper">
        <h1 className="title">Random Quote App</h1>
        <div id="quote-box">
          <QuoteBox quote={quote} author={author} />
          <div id="buttons">
            <Social quote={quote} author={author}/>
            <Button onClick={this.getNewQuote} title='New Quote' />
          </div>
        </div>
        <Footer/>
        <ReactFCCtest />
      </div>
    );
  }
}

export default App;
