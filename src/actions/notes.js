import * as api from '../api/notes' ;

export const getNotes =  ()=>{

    return async function(dispatch) {
        try {
            const {data}  = await api.getNotes() ;

            dispatch({ type: 'GET_NOTES', payload : data }) ;
        } catch (error) {
            console.log(error);
            dispatch({ type : 'LOGOUT' }) ;
        }
    }
} ;

export const createNote = (note)=>{
    
    return async function(dispatch){
        try {
            const {data}  = await api.createNote(note) ;
            
            dispatch({ type : 'GET_NOTES', payload :  data  }) ; 

        } catch (error) {
            console.log(error);
            dispatch({ type : 'LOGOUT' }) ;
        }
    }
} ;

export const deleteNotes = (id) => {
    return async function(dispatch) {
        try {
            const  {data}  = await api.deleteNote(id) ; 

            console.log(data);

            dispatch({type : 'DELETE' , payload : id}) ; 
        } catch (error) {
            console.log(error) ;
        }
    }
} ; 

export const editNote = (note,currentId) => {
    return async function (dispatch) {
        try {
            const {data} = await api.updateNote(note,currentId) ;  

            // console.log(data);
            
            dispatch({ type : 'UPDATE', payload : data }) ;
        } catch (error) {
            console.log(error);
        }
    }
}

