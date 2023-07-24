import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom' ;
import jwt_decode from 'jwt-decode' ;

import { getNotes } from '../actions/notes';

const Auth = () => {

    const dispatch = useDispatch() ; 
    const navigate = useNavigate() ; 

    const googleSuccess = async (res) => {
        
        const token = res?.credential ;
        const decoded = jwt_decode(token) ;

        localStorage.setItem('profile',JSON.stringify({token, decoded})) ;

        dispatch(getNotes()) ;

        navigate('/') ;
    }

    return (
        <GoogleOAuthProvider clientId='899913835169-l0hk1rdrpv19ajsif83qr83gafmopf72.apps.googleusercontent.com'>
            <GoogleLogin
                onSuccess={googleSuccess}
                onError={(error) => console.log(error)}
            />
        </GoogleOAuthProvider>
    )
}

export default Auth


