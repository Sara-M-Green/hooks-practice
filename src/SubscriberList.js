import SubscriberView from './SubscriberView'

function SubscriberList({ subscribers, deleteSubscriber}) {
    return (
        <div>
            <h1>Subscribers</h1>
            <ul>
                {subscribers.map((subscriber, index) => (
                    <SubscriberView
                        deleteSubscriber={() => deleteSubscriber(index)}
                        key={index}
                        subscriber={subscriber}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SubscriberList