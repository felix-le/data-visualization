import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '0.1rem 0',
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  footerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLinks: {
    display: 'flex',
    alignItems: 'center',
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    '& li': {
      listStyle: 'none',
      marginRight: '1rem',
      '&:last-child': {
        marginRight: 0,
      },
      '& a': {
        color: theme.palette.primary.contrastText,
        padding: '0.1rem 0.5rem',
        textAlign: 'center',
        textDecoration: 'none',

        '&:hover': {
          color: theme.palette.primary.dark,
        },
      },
    },
  },
}));

const footerLinks = [
  {
    name: 'Back end Github',
    href: 'https://github.com/felix-le/ws-product-nodejs',
  },
  {
    name: 'Back end Live',
    href: 'https://basalt-ultra-shoulder.glitch.me',
  },
  {
    name: 'Front end Github',
    href: 'https://github.com/felix-le/data-visualization',
  },
  {
    name: 'Requiredments',
    href: 'https://eqproduct.notion.site/Product-82634612a0c449d9906613aeac7bf3d0',
  },
  {
    name: 'Contact me',
    href: 'https://www.linkedin.com/in/felix-le/',
  },
];

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.footerWrapper}>
        <Container maxWidth='xl'>
          <div className={classes.footerContent}>
            <div className={classes.footerLogo}>
              <svg width='31.685' height='31.685' viewBox='0 0 31.685 31.685'>
                <g id='Group_1' data-name='Group 1' transform='translate(0 0)'>
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
            </div>
            <div className={classes.footerLinks}>
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
