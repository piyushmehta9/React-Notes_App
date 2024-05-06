import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";

const Createnote = (props) => {
  const [expand, setexpand] = useState(false);

  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    event.preventDefault();
  };

  const addEvent = (event) => {
    props.passNote(note);
    event.preventDefault();
    setnote({
      title: "",
      content: "",
    });
  };

  const expandit = () => {
    setexpand(true);
  };
  const shrinkit = () => {
    setexpand(false);
  };

  return (
    <>
      <button className="deleteAll" onClick={() => window.location.reload()}>
        Delete All
      </button>

      <div className="main_note" onDoubleClick={shrinkit}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}

          <textarea
            rows="5"
            cols="5"
            name="content"
            value={note.content}
            onChange={InputEvent}
            onClick={expandit}
            placeholder="write a note..."
          ></textarea>

          {expand ? (
            <button prevent="default" onClick={addEvent} className="btn1">
              <AddIcon className="plus_sign" />
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Createnote;
