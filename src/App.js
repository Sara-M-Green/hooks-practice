import React, { useState } from 'react'
import './App.css';
import CoinTossCounter from './CoinTossCounter'

function App() {
  const [results, setResults] = useState([])
  const [counts, setCounts ] = useState({ H: 0, T: 0})
  return (
    <section>
      <CoinTossCounter 
        results={results}
        setResults={setResults}
        counts={counts}
        setCounts={setCounts} 
      />
    </section>
  );
}

export default App;
