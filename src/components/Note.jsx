import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";

function Note(props) {

  const dispatch = useDispatch() ;

  const handleDelete = ()=>{ 
    props.onDelete(props.id) ;
    dispatch({ type : 'UNSET_ID' })
  }
  const handleEdit = ()=>{ dispatch({ type : 'SET_ID', payload : props.id }) } ;

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEdit}>
        <EditIcon />
      </button>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
