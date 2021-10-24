import {AppBar,Toolbar,makeStyles,Typography,Box,withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

import HeaderButtons from './HeaderButtons.jsx'


const useStyle= makeStyles({
    header:{
        background:'#fae5df',
        height: 55,
    },logo:{
        width:75,
    },subURL:{
        width:10,
        marginLeft:4,
    },container:{
        display:'flex',
        height:10,
    },component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:'none',
        color:'#fff',
    },subheading:{
        fontSize:10,
        fontStyle:'Italic',
    }
})

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

 const Header =() =>
 {
     const classes= useStyle();
     
     return (
        <AppBar className={classes.header}>
        <ToolBar>
        <Link to="/" className={classes.component}>

          </Link>
          <HeaderButtons />
        </ToolBar>
      </AppBar>
     )
 }
 export default Header;