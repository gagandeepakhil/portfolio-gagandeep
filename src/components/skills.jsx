import React from "react";
import skillset from "../skills";

function Skills(){
    return(
        <div id="skills">
            <h1>Tools,Languages and Frameworks I use...</h1>
            <div className="skillset">
                {skillset.map((me)=>{
                    return(
                        <div className="lang">
                            <a href={me.link}><img src={me.icon} alt="" /></a>
                            <p>{me.name}</p>
                        </div>   
                    )
            })}
            </div> 
        </div>
    )
}

export default Skills;