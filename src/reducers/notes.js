const reducer = ( state = { notes : [], currentId : null } , action)=>{
    switch (action.type) {

        case 'GET_NOTES' :
            return { ...state, notes : action?.payload?.data }

        case 'LOGOUT' :
            localStorage.clear() ;
            return {} ; 

        case 'DELETE' :
            return { ...state, notes : state.notes.filter((note) => note._id !== action.payload)}

        case 'SET_ID' :
                return { ...state, currentId : action.payload } ;

        case 'UNSET_ID' :
                return { ...state, currentId : null } ;

        case 'UPDATE' :
            return { ...state, notes : state.notes.map((note)=> note._id === action.payload._id ? action.payload : note) } ;

        default:
            return state ; 
    }
} ;

export default reducer ; 