import React from 'react';
import { useSelector } from 'react-redux';
function Chart() {
  const state = useSelector((state) => state);
  console.log('🚀 ~ file: Chart.js ~ line 5 ~ Chart ~ event', state);
  return <div>Chart</div>;
}

export default Chart;
