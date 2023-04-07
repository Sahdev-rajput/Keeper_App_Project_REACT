import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesarr, setnotesarr] = React.useState([]);
  function Addme(inputtext) {
    setnotesarr((prevValue) => {
      return [...prevValue, inputtext];
    });
  }
  function deleterecent(id) {
    setnotesarr((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea checked={Addme} />
      {notesarr.map((inputtext, index) => {
        return (
          //console.log({inputtext.title});
          <Note
            id={index}
            key={index}
            deleteitems={deleterecent}
            title={inputtext.title}
            content={inputtext.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
