import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {},
  comparedWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    '& h5': {
      marginRight: 15,
    },
    '& .react-datepicker-wrapper': {
      width: 'auto',
      '& input': {
        padding: '0.5rem',
        marginRight: '2rem',
      },
    },

    '& .text-red': {
      color: 'red',
    },
  },
}));

export { useStyles };
