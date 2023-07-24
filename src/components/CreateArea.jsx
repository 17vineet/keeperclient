import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Fab, Zoom } from "@material-ui/core";
import { useLocation } from 'react-router-dom';
import EditIcon from "@material-ui/icons/Edit";

import { createNote, editNote } from '../actions/notes';


function CreateArea() {
  const currentId = useSelector((state) => state.currentId);
  const post = useSelector((state) => currentId ? state.notes.find((note) => note._id === currentId) : null);
  const [isExpanded, setExpanded] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [note, setNote] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (currentId) {
      setExpanded(true);
      setNote(post);
    } else {
      setNote({ title: "", content: "" });
    }
  }, [currentId]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  const handleClick = (event) => {
    if(currentId){
      dispatch(editNote(note,currentId)) ; 
    } else {
      dispatch(createNote(note));
    }
    dispatch({ type : 'UNSET_ID' }) ;
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  const expand = () => { setExpanded(true); }

  if (!user) {
    return (
      <form elevation={6} className="create-note">
        <Typography variant='h6' align='center'>
          Please Sign in to create and view your notes.
        </Typography>
      </form>
    )
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        )}
        <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          {currentId ? 
            <Fab onClick={handleClick}>
              <EditIcon />
            </Fab> :
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>  
          }
        </Zoom>
      </form>
    </div>

  );
}

export default CreateArea;
