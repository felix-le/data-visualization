import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import EventModule from '../../components/EventModule';

function EventPage() {
  // const newstate = useSelector((state) => state);
  const { eventDaily, eventHourly } = useSelector((state) => state.event);

  return (
    <Layout>
      <EventModule eventDaily={eventDaily} eventHourly={eventHourly} />
    </Layout>
  );
}

export default EventPage;
