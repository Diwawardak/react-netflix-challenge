import React from 'react';
import './App.css';
import Options from './components/Options'



const App = () => {
  return (

    <div id="container">
      <h1 id="title">Frequently Asked Questions</h1>

      <Options text="What is Netflix?" />
      <Options text="How much does Netflix cost?" />
      <Options text="Where can I watch?" />
      <Options text="How do I cancel?" />
      <Options text="What can I watch on Netflix?" />
      <Options text="How does the free trial work?" />

      <div id="btn">
        <a className="button"> TRY 30 DAYS FREE > </a>
      </div>

    </div>

  )
}

export default App;
