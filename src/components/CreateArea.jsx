import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAddNote(inputText);
    setInputText({ title: "", content: "" }); // value needs to be defined in input to make it work
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={inputText.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={inputText.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
