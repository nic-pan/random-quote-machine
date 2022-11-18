import './App.css';
import QuoteBox from './QuoteBox';
import React, { useState, useEffect, Fragment } from 'react';

const quotesUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuotes = async () => {
    const response = await fetch(quotesUrl)
    const {quotes} = await response.json();
    setQuotes(() => quotes);
    setLoading(() => false);
  }
    
  useEffect(() => {
    getQuotes();
  }, [])
  

  return (
      <Fragment>
        {loading ? <div>Loading....</div> : <QuoteBox quotes={quotes}/>}
      </Fragment>
      
  )
}

export default App;
