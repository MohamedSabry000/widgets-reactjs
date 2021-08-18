import React from 'react';
import Accordion from '../Accordion';
import Search from '../Search';
import './App.css';


function App() {

  const items = [
    {
      title: 'What is React?',
      content: "React is a front end javascript framework"
    },
    {
      title: 'Why use React?',
      content: "React is a favourite Library among engineers"
    },
    {
      title: 'How do you use React?',
      content: "We use React by creating components"
    }
  ]



  return (
    <div className="ui container">
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
