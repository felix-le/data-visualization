import dayjs from 'dayjs';

const maxDate = dayjs('03/11/2017').toDate();
const minDate = dayjs('01/01/2017').toDate();

const dateComparingFormat = (date) => dayjs(date).format('MM/DD/YYYY');

export { maxDate, minDate, dateComparingFormat };
