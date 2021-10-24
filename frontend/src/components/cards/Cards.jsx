import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import {tracks} from '../../constants/data.js';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        marginLeft:250,
        background: '#FFFFFF',
        display:'grid',
        gridGap:'10px',
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    text: {
        fontSize: 14,
        marginTop: 5,
        display:'flex',
        color:'#000'
    },
    wrapper1:{
        marginTop:10,
        marginLeft:10,
        width:'95%',
        height:100,
        backgroundColor:'#f5cac2',
        borderRadius:10,
        boxShadow:'2px 2px 2px 2px #888888',
    },
    wrapper2: {
        padding: '20px 150px',
        width:'100%',
    },
    links:
    {
        textDecoration:'none',

    }
}));

const Slide = () => {
    const classes = useStyle();
    
    return (
        <Box className={classes.component}>
           
                {
                    tracks.map(temp => (
                        <Link to={`tracks/${temp.id}`} className={classes.links}> 
                        <Box className={classes.wrapper1}>
                            <Box textAlign="center" className={classes.wrapper2}>
                                <Typography className={classes.text} >{temp.name}</Typography>
                            </Box>
                        </Box>
                        </Link>
                    ))
                }
        </Box>
    )
}

export default Slide;