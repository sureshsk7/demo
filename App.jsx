import React from "react";
import { Heading } from "./Heading";
import { Footer } from "./Footer";
import { Note } from "./Note";

function App(){
    return <div className="main">
        <Heading></Heading>
        <Note></Note>
        <Footer></Footer>
    </div>
}

export {App}