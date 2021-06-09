import React, { useState } from 'react'
import './App.css';
import SubscriberForm from './SubscriberForm'
import SubscriberList from './SubscriberList'

function App() {
  const [subscribers, setSubscribers] = useState([])

  const createSubscriber = (newSubscriber) => 
    setSubscribers((currentSubscribers) => 
      [newSubscriber, ...currentSubscribers]
    )
  

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((currentSubscribers) => 
      currentSubscribers.filter((post, index) => index !== indexToDelete)
    )


  return (
    <section>
      <SubscriberForm
        createSubscriber={createSubscriber}
     />
     <SubscriberList
        subscribers={subscribers}
        deleteSubscriber={deleteSubscriber}
     />
    </section>
  );
}

export default App;
