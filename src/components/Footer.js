import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import { ReactComponent as Logo } from '../images/logo.svg';
import { SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLinks: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    '& a:hover': {
      color: theme.palette.primary.light,
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
            <Box
              className={classes.footerLogo}
              sx={{
                mb: { xs: 1, md: 0 },
              }}
            >
              <Link href='/' sx={{ display: 'inline-block' }}>
                <SvgIcon viewBox='0 0 32 32'>
                  <Logo />
                </SvgIcon>
              </Link>
            </Box>
            <Box className={classes.footerLinks}>
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  color='inherit'
                  underline='none'
                  variant='body2'
                  sx={{
                    ml: 2,
                    mr: { xs: 2, md: 0 },
                    mb: { xs: 1, md: 0 },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
