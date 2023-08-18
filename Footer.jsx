import React from "react";

function Footer(){
    const d = new Date()
    let year = d.getFullYear();
    
    return <div className="foot1">
        <p className="para"> Copyright &#169; {year}</p>
    </div>
}

export {Footer};