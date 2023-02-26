import React from "react";

function Intro(){
    
    const ta=[
        "I am Gagandeep.",
        "I am Web Developer.",
        "I love to learn new things."
    ] 
    var i=1;
    setInterval(function me(){
        document.getElementsByClassName('tx')[0].innerHTML = ta[i];
        i=(i+1)%3;
    },2998)


    return(
        <div id="intro">
            <img src="images/me.jpg" alt="Gagandeep" />
            <h2>Hey There💙</h2>
            <h1><p className="tx">{ta[0]}</p></h1>
            <p className="brief">MERN Stack Developer - Self Learner - FreeLancer</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/gagandeepdunna" target="blank"><img src="images/linkedin.svg" frameBorder="0"/></a>
                <a href="https://github.com/gagandeepakhil/" target="blank"><img src="images/github.svg" frameBorder="0"/></a>
                <a href="https://twitter.com/gagandeep_akhil" target="blank"><img src="images/twitter.svg" frameBorder="0"/></a>
                <a href="https://www.instagram.com/gagandeep_akhil/" target="blank"><img src="images/instagram.svg" frameBorder="0"/></a>
            </div>
        </div>
    )
}

export default Intro;