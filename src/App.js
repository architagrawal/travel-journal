import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
};

export default App;
