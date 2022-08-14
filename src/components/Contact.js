import React from 'react'

const Contact = () => {
  return (
    <div className="contactContainer" id="contactMe">
            <h1 className="heading">Contact Me</h1>
            <div className="contactInner">
                <div className="contactImg">
                    <img src="image/email.png" alt="email img"/>
                </div>
                <div className="contact">
                    <form action="">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea name="message" id="" cols="50" rows="5" placeholder="Message.."></textarea>
                        <input type="submit" className="submitBtn" value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact