import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Header from "./Header/Header";
import { deleteNotes, getNotes } from '../actions/notes' ;

function App() {
  const {notes} = useSelector(state => state) ; 
  // console.log(notes);
  const dispatch = useDispatch() ;
  const user = JSON.parse(localStorage.getItem('profile')) ;

  useEffect(()=>{
    if(user)  dispatch(getNotes()) ;
  },[])


  const deleteNote = (id)=>{ dispatch(deleteNotes(id)) ; }

  return (
    <BrowserRouter>
      <Header />
      <CreateArea/>
      {notes?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
