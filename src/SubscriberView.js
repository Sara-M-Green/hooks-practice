function SubscriberView({ subscriber, deleteSubscriber }) {
    return (
        <li>
            <h2>Name: {subscriber.name}</h2>
            <h2>Email: {subscriber.email}</h2>
            <button name="delete" onClick={deleteSubscriber}>Unsubscribe</button>
        </li>
        
    )
}

export default SubscriberView