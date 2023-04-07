import React from "react";

function CreateArea(props) {
  const [inputtext, setinput] = React.useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    //const name = event.target.name;
    //console.log(title);
    // console.log(name);
    //console.log(event.target.value);
    setinput((prevvalue) => {
      if (name === "title") {
        setinput({
          title: value,
          content: prevvalue.content
        });
      } else {
        setinput({
          title: prevvalue.title,
          content: value
        });
      }
    });
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handlechange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handlechange}
        />
        <button
          onClick={(event) => {
            props.checked(inputtext);
            setinput({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
