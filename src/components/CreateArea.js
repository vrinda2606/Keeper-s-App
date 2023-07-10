import React, { useState } from "react";

function CreateArea(props) {

    const [input,setInput]= useState({
        title : "",
        content : ""
    });
    
    function handle(event){
       const {name,value} = event.target;
       setInput(prevInput =>{
        return {
        ...prevInput,
        [name] : value
       };
       });
    }

    function submitNote(event){
     event.preventDefault();
     props.onAdd(input);
     setInput({title:"",content:""})
    }

  return (
    <div>
      <form>
        <input name="title" value={input.title} onChange={handle} placeholder="Title" />
        <textarea name="content" value={input.content} onChange={handle} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
