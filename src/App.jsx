import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

const App = () => {
  const [additem, setadditem] = useState([]);

  const addNote = (note) => {
    setadditem((prevData) => {
      return [...prevData, note];
    });
    // alert("i am clicked");
  };

  const onDelete = (id) => {
    setadditem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <Createnote passNote={addNote} />

      {additem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;
