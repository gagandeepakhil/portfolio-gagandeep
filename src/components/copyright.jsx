import React from "react";

function Copy(){
    const date=new Date();
    const year=date.getFullYear();
    return(
        <div className="copy">
            <p>&#169;{year} <span style={{color:"rgba(240, 248, 255, 0.481)"}}>Dunna Gagan deep</span> All rights reserved.</p>
        </div>
    )
}

export default Copy;