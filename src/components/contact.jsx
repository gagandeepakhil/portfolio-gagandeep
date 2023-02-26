import React from "react";

function Contact(){
    return(
        <div id="contact">
            <div className="chose">
                <h2>WHY CHOSE ME</h2>
                <p>I believe that my experience, dedication to quality work, flexibility, and passion make me an excellent choice for your MERN stack development needs.Besides MERN stack development,I have expertise in HTMl,CSS and JS whihc helps me to build full stack web applications that are effective and visually pleasing.I prioritize communication with my clients to ensure that I'm meeting their expectations and delivering exactly what they're looking for.I would love the opportunity to discuss your project with you further and see how I can help bring your vision to life...</p>
            </div>
            <div className="cont">
                <img src="images/email.png" alt="" />
                <form action="mailto:gagandeepdunna9@gmail.com">
                    <label>NAME:</label>
                    <input type="text" placeholder="Enter your name" autoComplete="no" aut name="name" required/>
                    <label>EMAIL:</label>
                    <input type="email" name="email" placeholder="Enter your email here" autoComplete="no" required/>
                    <label>MESSAGE:</label>
                    <textarea cols="30" rows="5" placeholder="Leave your message here..." name="message" autoComplete="no" required></textarea>
                    <button type="submit">Say HI!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;