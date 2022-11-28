import React, {useEffect} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '0',
        paddingTop: '77%', // 16:9
    },
 
}));

const Project = ({ title, desc, link, img }) => {
    const classes = useStyles();
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
          });
       }, [])
    return (
        
            <Card className={classes.root} data-aos="flip-left">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={link} target="_blank" rel="noreferrer" ><Button color="primary" variant="contained">View</Button></a>
                </CardActions>
            </Card>
        
    )
}

export default Project
