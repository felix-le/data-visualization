import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEventHourly } from '../../store/actions/event.actions';
import { getEventHourlyApi } from '../../api/getEvents';

function HomePage() {
  const dispatch = useDispatch();

  const _getEventHourly = async () => {
    try {
      const response = await getEventHourlyApi();
      console.log(
        '🚀 ~ file: HomePage.js ~ line 12 ~ const_getEventHourly= ~ response',
        response
      );
      // dispatch(getEventHourly(response.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _getEventHourly();

    // dispatch({ });
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
