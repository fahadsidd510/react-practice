import React from 'react';
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
    </div>
  )
}

export default App;