import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import StatsModule from '../../components/StatsModule';

function Stats() {
  const { statsHourly, statsDaily } = useSelector((state) => state.stats);

  return (
    <Layout>
      <StatsModule statsHourly={statsHourly} statsDaily={statsDaily} />
    </Layout>
  );
}

export default Stats;
