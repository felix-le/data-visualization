import React from 'react';

import { AppBar, Typography, Toolbar, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    marginRight: '1rem',
  },
  navBarWapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoNavWrapper: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
  },

  navLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundColor: '#000',
    },
    '&.active': {
      backgroundColor: '#000',
    },
  },

  linkStyle: {
    textDecoration: 'none',
    color: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
  },
  action: {
    padding: '0.2rem 1rem',
    border: '.125rem solid #fff',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static' color='primary'>
          <Container maxWidth='xl'>
            <Toolbar className={classes.navBarWapper}>
              <div className={classes.logoNavWrapper}>
                <div className={classes.logoWrapper}>
                  <Typography variant='h4'>
                    <NavLink className={classes.linkStyle} to='/'>
                      <svg
                        width='31.685'
                        height='31.685'
                        viewBox='0 0 31.685 31.685'
                      >
                        <g
                          id='Group_1'
                          data-name='Group 1'
                          transform='translate(0 0)'
                        >
                          <path
                            id='Path_6'
                            data-name='Path 6'
                            d='M347.679,351.941a5.257,5.257,0,0,0-5.161,4.1H352.8A5.289,5.289,0,0,0,347.679,351.941Z'
                            transform='translate(-331.844 -342.25)'
                            fill='#fff'
                          ></path>
                          <path
                            id='Path_7'
                            data-name='Path 7'
                            d='M98.5,110.56l-1.907-1.849s-.484-.367.483-1.3A15.811,15.811,0,1,0,92.2,111.25h0a1.44,1.44,0,0,1,1.244.119l2.167.982a1.034,1.034,0,0,0,1.1,0l1.792-1.187S98.933,110.906,98.5,110.56ZM94.8,98.5H78.666A6.465,6.465,0,0,0,90.1,101.2H94c-2.5,5.837-8.976,5.837-8.976,5.837a9.9,9.9,0,0,1-9.772-8.5,9.792,9.792,0,0,1,5.329-10.206A9.843,9.843,0,0,1,94.8,98.5Z'
                            transform='translate(-69.185 -81.278)'
                            fill='#fff'
                          ></path>
                        </g>
                      </svg>
                    </NavLink>
                  </Typography>
                </div>

                <Button>
                  <NavLink to='/events' className={classes.navLink}>
                    {' '}
                    <Typography variant='h5'> Events </Typography>
                  </NavLink>{' '}
                </Button>
                <Button>
                  <NavLink to='/stats' className={classes.navLink}>
                    {' '}
                    <Typography variant='h5'> Stats </Typography>
                  </NavLink>{' '}
                </Button>
                <Button>
                  <NavLink to='/geo' className={classes.navLink}>
                    {' '}
                    <Typography variant='h5'> Geo </Typography>
                  </NavLink>{' '}
                </Button>
              </div>
              <Button>
                <a
                  href='https://www.eqworks.com/company/contact-us/'
                  className={`${classes.navLink} ${classes.action}`}
                >
                  <span>GET IN TOUCH</span> <span>»</span>
                </a>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
