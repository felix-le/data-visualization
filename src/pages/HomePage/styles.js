import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  homeHero: {
    maxWidth: '100%',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0,
  },
  homeHeroVideo: {
    height: '100%',
    left: '50%',
    maxWidth: 'none',
    oObjectFit: 'cover',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: '-2',
  },
  overlay: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textAlign: 'center',
    color: '#fff',
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),

    '& a': {
      color: theme.palette.info.lighter,
      textDecoration: 'none',
      '&:active': {
        color: theme.palette.primary.dark,
      },
    },
  },
}));

export { useStyles };
