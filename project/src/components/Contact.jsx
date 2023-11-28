import React from 'react'
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-card">
          <div className="left">
            <img className='contact-img' src="" />
          </div>
          <div className="right">
            <h2>Contact Us</h2>
            <div className="contact">
              <div className="form-container">
                <form className="form">
                  <div className="username">
                    <input type="text" placeholder="Enter your Name" />
                  </div>
                  <div className="useremail">
                    <input type="email" placeholder="Enter your email" required="" />
                  </div>
                  <div className="usermessage">
                    <textarea
                      placeholder="Enter your message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="usersubmit">
                    <input type="submit" defaultValue="Contact Us" />
                  </div>
                </form>
              </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
