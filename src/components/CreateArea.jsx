import React,{useState} from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onChange(event){
    const {name, value} = event.target;
    console.log(name);
    console.log(value);

    setNote(prevValue => {
      if(name==="title"){
        console.log(name);
        return {
          title: value,
          content: prevValue.content
        }
      }
      else if(name==="content"){
        return {
          content: value,
          title: prevValue.title
        }
      }
    })
  }

  return (
    <div>
      <form>
        <input onChange={onChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={onChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
