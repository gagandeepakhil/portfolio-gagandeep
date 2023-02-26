import React from "react";
import pro from "../projects";

function Project(){
    return(
        <>
            <h1>🌟LATEST BUILDS🌟</h1>
            <div id="projects">
            {pro.map(pr=>{
                return(
                    <div className="pro">
                        <img src={pr.img} alt={pro.title} />
                        <h4>{pr.title}</h4>
                        <p>{pr.text}</p>
                        <div className="link">
                            <a href={pr.git} target="_blank"><img src="images/github-btn.png" alt={pr.git} /></a>
                            <a href={pr.demo} target="_blank"><button>LIVE DEMO</button></a>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
        
    )
}

export default Project;