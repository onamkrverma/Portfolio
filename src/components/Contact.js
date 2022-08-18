import React from 'react'

const Contact = () => {
  return (
    <div className="contactContainer" id="contactMe">
            <h1 className="heading">Contact Me</h1>
            
            <div className="contactInner">
                <div className="contactImg">
                    <img src="image/message.png" alt="email img"/>
                </div>
                <div className="contact">
                    <form action="https://formspree.io/f/xeqdqpnr" method="POST">
                        <input type="text" placeholder="Name" name='name' required autoComplete='off' minLength="3"/>
                        <input type="email" placeholder="Email" name='email' required autoComplete='off' minLength="5"/>
                        <input type="text" placeholder="Subject" name='subject' required autoComplete='off' minLength="5"/>
                        <textarea name="message" id="" cols="50" rows="5" placeholder="Message.." required autoComplete='off' minLength="5"></textarea>
                        <input type="submit" className="submitBtn" value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact