import React from 'react';

import { Routes, Route } from 'react-router-dom';

import TablePage from './TablePage';
import ChartPage from './ChartPage';
import GeoPage from './GeoPage';
import HomePage from './HomePage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/table' element={<TablePage />} />
      <Route path='/chart' element={<ChartPage />} />
      <Route path='/geo' element={<GeoPage />} />
    </Routes>
  );
}
export default Router;
