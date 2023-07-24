import axios from 'axios' ; 

const API = axios.create({baseURL: 'https://keeper-app-i5b1.onrender.com'}) ;

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` ;
    }
    return req ; 
})

export const getNotes = ()=> API.get(`/notes`) ;
export const createNote = (note)=> API.post(`/notes`,note) ;
export const deleteNote = (id)=> API.delete(`/notes/${id}`) ;
export const updateNote = (note,id) => API.patch(`/notes/${id}`,note)