import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  tableTitle: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    marginBottom: '1rem',
  },
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
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  table: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.76)',
  },
  tableHead: {
    '& th': {
      backgroundColor: theme.palette.dark,
      height: 56,
      padding: '0 16px',
      color: theme.palette.text.primary,
      borderRight: '1px solid rgba(0,0,0,1.12)',

      '&:last-child': {
        borderRight: 'none',
      },
      '& .thWrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      '& .iconContainer': {
        width: 38,
        height: 32,
        borderRadius: 4,
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
}));

export { useStyles };
