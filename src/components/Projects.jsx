import { Grid, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import data from '../data/Data'
import Project from './Project'



const useStyles = makeStyles((theme)=>({
    content: {
        flexGrow: 1,
        backgroundColor:'#f9f9ff',
        padding:'100px',
        textAlign:'center'
      },
      head:{
        fontFamily: '"Heebo", "sans-serif"',
        fontSize: '36px',
        color: "#222222",
        fontWeight: "bold",
        marginBottom: "60px",
        textTransform: "uppercase",
      }
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <main className={classes.content} id="projects">
        <Typography variant="h2" className={classes.head}>My Projects</Typography>
       <Grid container justify="center" spacing={6}>
        {
            data.map((project) =>(
                <Grid item key={project.id} xs={12} sm={6} md={4} >
                    <Project 
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                        img={project.img}
                    />
                </Grid>
            ))
        }
       </Grid>
       </main>
    )
}

export default Projects
