import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color:'#fff'
    },
    title: {
        flexGrow: 1,
        color:'#fff'
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:'#131f2d'}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon color={'#fff'}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button style={{color:'#fff'}}>INFOSEL</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
