import React from 'react';
import Mapbox from '../../components/Mapbox';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';

function convertDataToGeoJSON(data) {
  const myGeoJSON = {};
  myGeoJSON.type = 'FeatureCollection';
  myGeoJSON.crs = {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  };
  myGeoJSON.features = data.map((location) => {
    return {
      type: 'Feature',
      properties: {
        id: location.poi_id,
        name: location.name,
        mag: 1.42,
      },
      geometry: { type: 'Point', coordinates: [location.lon, location.lat] },
    };
  });

  return myGeoJSON;
}

function Geo() {
  const { poi } = useSelector((state) => state.pois);
  const data = convertDataToGeoJSON(poi);

  return (
    <Layout>
      <Mapbox data={data} />
    </Layout>
  );
}

export default Geo;
