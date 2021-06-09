import React, { useState } from 'react'
import './App.css';
import Header from './Header'
import Content from './Content'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLoggedInClick = () => {
    setLoggedIn(!loggedIn)
  }

  // console.log("Subscribed Status:", subscribed)
  // console.log("Alerts Status", alerts)
  return (
    <section>
      <Header
        loggedIn={loggedIn}
        handleLoggedInClick={handleLoggedInClick}
      />
      <Content 
        loggedIn={loggedIn}
      />
    </section>
  );
}

export default App;
