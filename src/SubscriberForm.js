import { useState } from "react"

function SubscriberForm() {
    const initialFormState = {
        name: "",
        email: "",
        referral: "",
        age: "",
        subscription: true
    }

    const [formData, setFormData] = useState({...initialFormState})
    
    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value
        setFormData({
            ...formData,
            [target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted:", formData)
        setFormData({...initialFormState})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter Your Name:
                <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
            </label>

            <br />

            <label htmlFor="email">
                Enter Your Email:
                <input type="text" name="email" id="email" onChange={handleChange} value={formData.email} />
            </label>

            <br />

            <fieldset>
                <legend>How old are you?</legend>
                <label htmlFor="low">
                    Under 18
                    <input
                        type="radio"
                        name="age"
                        id="low"
                        onChange={handleChange}
                        value="low"
                        checked={formData.age === "low"}
                    />
                </label>

                <label htmlFor="middle">
                    18-60
                    <input 
                        type="radio"
                        name="age"
                        id="middle"
                        onChange={handleChange}
                        value="middle"
                        checked={formData.age === "middle"}
                    />
                </label>

                <label htmlFor="high">
                    Over 60
                    <input
                        type="radio"
                        name="age"
                        id="high"
                        onChange={handleChange}
                        value="high"
                        checked={formData.age}
                    />
                </label>
            </fieldset>

            <br />

            <label htmlFor="referral">
                How did you hear about us?
                <select name="referral" id="referral" onChange={handleChange} value={formData.referral}>
                    <option value="">--- Select an Option ---</option>
                    <option value="wom">Word of Mouth</option>
                    <option value="twitter">Twitter</option>
                    <option value="youtube">YouTube</option>
                </select>
            </label>

            <br />

            <label htmlFor="subscription">
                Receive email notifications?
                <input
                    type="checkbox"
                    name="subscription"
                    id="subscription"
                    onChange={handleChange}
                    checked={formData.subscription}
                    value="subscription"
                />
            </label>

            <br />

            <button type="submit">Submit</button>
        </form>
    )
}

export default SubscriberForm