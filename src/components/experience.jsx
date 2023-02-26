import React from "react";
import exp from "../experience";

function Experience(){
    return(
        <>
            <h1>👨‍💼EXPERTISE</h1>
            <div id="experience">
                {exp.map(ex=>{
                    return(
                        <div className="flipcard">
                            <div className="inner">
                                <div className="front">
                                    <img src={ex.image} alt={ex.title} />
                                    <h3>{ex.title}</h3>
                                </div>
                                <div className="back">
                                    <h4>{ex.title}</h4>
                                    <ul>
                                        {
                                            ex.text.map(te=>{
                                                return(
                                                    <li>{te}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                    </div>
                    )
                })}
            </div>
        </>
        
    )
}

export default Experience;