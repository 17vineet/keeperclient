import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import HighlightIcon from "@material-ui/icons/Highlight";
import {useLocation, useNavigate} from 'react-router-dom' ;
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Auth from '../Auth';


const Header = () => {

    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile'))) ;
    const location = useLocation() ; 
    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile'))) ;
    },[location])

    const logout = ()=>{
        dispatch({type:'LOGOUT'}) ;
        navigate('/') ;
    }


    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <h1>
                <HighlightIcon />
                Keeper
            </h1>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.decoded.name} src={user.decoded.picture}>
                            {user.decoded.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant='h6'>
                            {user.decoded.name}
                        </Typography>
                        <Button variant='outlined' className={classes.logout} onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Auth />
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header