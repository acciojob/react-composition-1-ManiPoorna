import React, {useState} from "react";
import ReactDOM from "react-dom";



const Ans = () => {
    let [tabClick,setTabClick] = useState("");

    function display(e){
        console.log(e.target.innerText)
        setTabClick(e.target.innerText);
    }
    return(
        <div>
            <ul>
                <li onClick={(e)=>display(e)}>Tab 1</li>
                <li onClick={(e)=>display(e)}>Tab 2</li>
                <li onClick={(e)=>display(e)}>Tab 3</li>
            </ul>
            {
                tabClick && <p>This is the content for {tabClick}.</p>
            }
        </div>
    )
}

export default Ans; 