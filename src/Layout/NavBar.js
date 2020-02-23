import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  nav: {
    display: 'flex',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  ul: {
    listStyle: 'none'
  },
  li: {
    display: 'inline-block',
    padding: '0 13px',
    fontSize: '20px'
  }
}));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <div className='branding'>
            <Typography
              className={classes.title}
              component='title'
              variant='h4'
              noWrap
            >
              <span style={{ fontSize: 50, color: '#000' }}>NY</span>Top News
            </Typography>
          </div>
          <div className={classes.nav}>
            <ul className={classes.ul}>
              <li className={classes.li}>New York Times</li>
              <li className={classes.li}> About</li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
