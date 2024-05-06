import React, { useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
  const deleteNote = (event) => {
    props.deleteitem(props.id);
  };

  return (
    <>
      <div className="out_div">
        <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <button className="btn2">
            <DeleteOutlineIcon className="deleteicon" onClick={deleteNote} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Note;
