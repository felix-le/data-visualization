import React from 'react';

import { Routes, Route } from 'react-router-dom';

import StatsPage from './StatsPage';
import Events from './Events';
import GeoPage from './GeoPage';
import HomePage from './HomePage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/events' element={<Events />} />
      {/* Change to events page + Poi +  */}
      <Route path='/stats' element={<StatsPage />} />
      <Route path='/geo' element={<GeoPage />} />
    </Routes>
  );
}
export default Router;
