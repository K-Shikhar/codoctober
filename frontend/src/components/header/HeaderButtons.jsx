import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles,Button,Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import {useContext, useState} from 'react';
import { useSelector } from 'react-redux';
// import LoginDialog from '../login/Login.jsx';
// import { LoginContext } from '../../context/contextProvider.jsx';
import Profile from './Profile.jsx';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#000',
            fontSize: 12,
            alignItems: 'center', 
        }, 
    },
    login: {
        color: '#000',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    }
}));

const HeaderButtons=()=>{
    const classes= useStyle();

    // const [open,setOpen]=useState(false);

    // const {account,setAccount}=useContext(LoginContext);

    // const cartDetails = useSelector(state => state.cart);
    // const { cartItems } = cartDetails;

    // const openLoginDialog=()=>{
    //     setOpen(true);
    // }

    return(
        <Box className={classes.wrapper}>
        <Link ><Typography style={{ marginTop: 5 }}>Heading1</Typography></Link>
            <Link to="" className={classes.container}>
                    <Typography style={{marginLeft:10}}>Heading2</Typography>
            </Link>
            {/* <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} /> */}
        {
            /*account ? <Profile/>:*/
            <Link >
            <Button variant="contained" /*onClick={()=>openLoginDialog()}*/ className={classes.login}>Login</Button>
            </Link>

        }
            
        </Box>

    )
}

export default HeaderButtons;