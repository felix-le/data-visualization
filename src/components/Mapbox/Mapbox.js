/* eslint-disable import/no-webpack-loader-syntax */
import * as React from 'react';
import { useRef } from 'react';
import ReactMapGL from 'react-map-gl';
import { Map, Source, Layer } from 'react-map-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import './Mapbox.css';
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
  unclusteredLabelLayer,
} from './layers';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZmVsaXhsZSIsImEiOiJja21kd2ZqaDUycTFjMnZxcnpjZTA1YTlsIn0.XQWrn5uNVtuBJO-LHBq48A'; // Set your mapbox token here

export default function Mapbox({ data }) {
  const mapRef = useRef(null);

  const onClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource('locations');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };

  return (
    <div id='map'>
      <Map
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 3,
        }}
        mapStyle='mapbox://styles/mapbox/dark-v9'
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
        cursor='pointer'
      >
        <Source
          id='locations'
          type='geojson'
          data={data}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />

          <Layer {...unclusteredLabelLayer} />
        </Source>
      </Map>
    </div>
  );
}
