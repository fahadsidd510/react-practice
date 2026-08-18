import React, { useState } from 'react';
import Card from './components/Card';

const Cards = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Explore the Mountains",
    description: "Discover beautiful mountain destinations and experience nature at its best.",
    category: "Travel",
    callToAction: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Discover the Beach",
    description: "Relax on pristine beaches and enjoy crystal-clear waters.",
    category: "Beach",
    callToAction: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Visit the City",
    description: "Experience the vibrant culture and bustling streets of major cities.",
    category: "City", 
    callToAction: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Trek Through the Forest",
    description: "Immerse yourself in lush greenery and encounter diverse wildlife.",
    category: "Nature",
    callToAction: "#"
  }
];  

const App = () => {
  function clickMe() {
    alert("Button clicked!");
  }

  // Reciving values from function example

  function getInputValue (val) {
    console.log(val);
  }

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    console.log("Incrementing counter");
    setCounter(counter + 1)
  }

  function decrementCounter() {
    console.log("Decrementing counter");
    setCounter(counter - 1)
  }

  return (
    <div className="cards-container">
      {Cards.map((card, index) => (
        <Card
          image={card.image}
          title={card.title}
          description={card.description}
          category={card.category}
          callToAction={card.callToAction}
        />
      ))}

      <button className="load-more-button" onClick={clickMe}>
        ClickMe
      </button>
      <input type="text" onChange={function(elem){
        getInputValue(elem.target.value)
      }} />

      <div className="counterNum">
        <div className="counterText">
          <h1>{counter}</h1>
        </div>
        <div className="CounterButtons">
          <button className="counterButton" onClick={incrementCounter}> Incease Counter </button>
          <button className="counterButton" onClick={decrementCounter}> Decrease Counter </button>
        </div>
      </div>
      

    </div>
  )
}

export default App;