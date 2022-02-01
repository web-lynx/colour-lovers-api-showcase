import React, {useState, useEffect} from 'react';
import ColourShowcase from './ColourShowcase';

const ColourSummoner = () => {
  const [colours, setColours] = useState({})
  
  const fetchColours = async () => {
    const res = await fetch("https://www.colourlovers.com/api/patterns/random?format=json")
    const data = await res.json()
    setColours(data)
    console.log(colours)
}

    const handleFetch = () => {
        // event.preventDefault()
        fetchColours()
    }

    useEffect(() => handleFetch())

  return <section id="main">
      <section id="search"> 
        <p>Want another colour scheme to try out?</p>
        <button onClick={handleFetch}>Press me!</button>
      </section>
    <section id="colour-showcase">
        <ColourShowcase />
    </section>
  </section>;
};

export default ColourSummoner;
