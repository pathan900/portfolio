import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';



const useStyle = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        top: '50%',
        right: "15px",
        width: '50px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        zIndex: 10,
        backgroundColor:'lightgrey'
    },
    icon: {
        margin: '10px'
    }
}))
const buttonVariants = {
    hover:{
       scale:1.2,
       transition:{
           yoyo: Infinity
       }
    },
    tap:{
        scale: 0.8,
        rotate: -90,
    }
   
}
const FindMeOn = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <motion.div
            variants={buttonVariants}
                whileHover="hover"
               whileTap="tap"
            >
                <Button >
                    <InstagramIcon className={classes.icon} />
                </Button>
            </motion.div>
            <motion.div
               variants={buttonVariants}
                whileHover="hover"
               whileTap="tap"
            >
            <Button>
                <FacebookIcon className={classes.icon} />
            </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
                whileHover="hover"
               whileTap="tap"
            >
            <Button>
                <TwitterIcon className={classes.icon} />
            </Button>
            </motion.div>
        </div>
    )
}

export default FindMeOn
