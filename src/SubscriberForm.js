import { useState } from "react"

function SubscriberForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Thanks for your submisison', name, email)
        setName('')
        setEmail('')
    }

    // console.log({name})
    // console.log({email})
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Your Name:
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    onChange={handleNameChange}
                    value={name} 
                />
            </label>

            <label htmlFor="email">Enter Your Email:
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    onChange={handleEmailChange}
                    value={email} 
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default SubscriberForm