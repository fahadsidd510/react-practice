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
  const [person, setPerson] = useState({name: "John", age: 30, city: "New York"});
  function changeUserData() {
    const newPerson = {...person}
    newPerson.name = "Fahad";
    newPerson.age = 25;
    newPerson.city = "Los Angeles";
    setPerson(newPerson);
    console.log({newPerson});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    console.log("Form submitted with name:", name);
  }

  return (
    <>
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
          <h1>{person.name}, {person.age}, {person.city}</h1>
        </div>
        <div className="CounterButtons">
          <button className="counterButton" onClick={incrementCounter}> Incease Counter </button>
          <button className="counterButton" onClick={decrementCounter}> Decrease Counter </button>
          <button className="counterButton" onClick={changeUserData}> Change User Data </button>
        </div>
      </div>
      
      
      

    </div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </>

    

  )
}

export default App;