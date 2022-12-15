import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        // alert("form submitted")
        const data = {
            access_key : e.target.access_key.value,
            from_name : e.target.from_name.value,
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message : e.target.message.value
        }
        // console.log(data)
        setLoading("⏳ Please wait..")

        // Api call to send data on server
        const response = await fetch('https://api.web3forms.com/submit',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        console.log("json" , json)
        if(response.status === 200){
            // console.log(json.message);
            setLoading("");
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false)
            }, 3000);

            e.target.reset();
              
        }else{
            setLoading("");
            setError(true)
            setTimeout(() => {
                setError(false);
            }, 3000);
            
            e.target.reset();
            // console.log(json.message);
            
        }

    }

    return (
        <div className="contactContainer" id="contactMe">
            <h1 className="heading">Contact Me</h1>

            <div className="contactInner">
                <div className="contactImg">
                    <img src="image/message.png" alt="email img" />
                </div>
                <div className="contact">
                    <form  method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="access_key" value="896cb856-c6a1-4c9a-bb77-9c625730b62b"/>
                        <input type="hidden" name="from_name" value="Onam|Portfolio Message"/>

                        <input type="text" placeholder="Name" name='name' required autoComplete='off' minLength="3" />
                        <input type="email" placeholder="Email" name='email' required autoComplete='off' minLength="5" />
                        <input type="text" placeholder="Subject" name='subject' required autoComplete='off' minLength="5" />
                        <textarea name="message" id="" cols="50" rows="5" placeholder="Message.." required autoComplete='off' minLength="5"></textarea>
                        <input type="submit" className="submitBtn" value="Send Message" />
                        <div className="submitStatus">
                            <p>{loading}</p>
                        <p style={{display: success?"block":'none'}} ><i className="fa-regular fa-circle-check"></i>Message Sent Successfully</p>
                        <p style={{display: error?"block":'none'}}><i className="fa-regular fa-circle-xmark"></i>Message not send</p>
                    </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact