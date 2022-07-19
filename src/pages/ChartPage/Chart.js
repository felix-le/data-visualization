import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';

function Chart() {
  const newstate = useSelector((state) => state);
  console.log('🚀 ~ file: Chart.js ~ line 5 ~ Chart ~ event', newstate);
  return (
    <>
      <Layout>
        <h1>Chart</h1>
      </Layout>
    </>
  );
}

export default Chart;
