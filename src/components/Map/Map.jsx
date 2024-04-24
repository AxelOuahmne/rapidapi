import React from 'react'

import useStyles from './style';
import { Paper, Typography, useMediaQuery  } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import Rating from '@mui/material/Rating';
function Map({setCoordinates,setBounds,coordinates}) {
  const classes = useStyles();
  const isMobile= useMediaQuery('(min-width: 600px');
  const coordinetes = {lat:0,lng:0};
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact 
              bootstrapURLKeys={{key:'AIzaSyBvOki7ed7m1K79jUyi8qJPyMU2j4rlkm8'}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50,50,50,50]}
              options={''}
              onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
              }}
              onChildCl
              onChildClick={''}
            >

            </GoogleMapReact>
</div>
  )
}

export default Map
