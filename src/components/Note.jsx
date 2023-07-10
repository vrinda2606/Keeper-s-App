import React from "react";
function Noted(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
    </div>
}
export default Noted;