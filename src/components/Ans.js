import React, {useState} from "react";


const Ans = () => {

    return(
        <div>
            <ul>
                <li onClick={(e)=>{<p>This is the content for {e.target.value}</p>}}>Tab 1</li>
                <li onClick={(e)=>{<p>This is the content for {e.target.value}</p>}}>Tab 2</li>
                <li onClick={(e)=>{<p>This is the content for {e.target.value}</p>}}>Tab 3</li>
            </ul>
        </div>
    )
}

export default Ans; 