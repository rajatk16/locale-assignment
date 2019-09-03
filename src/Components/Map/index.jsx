import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactMapboxGL, {Layer, Feature} from 'react-mapbox-gl'

import CITIES from '../../data/cities.json';

import './style.css';

const TOKEN = "pk.eyJ1IjoicmFqYXRrMTYiLCJhIjoiY2swMGJ3Y2J6MDIxZzNtbjR3ZWdxdmRwbyJ9.xE3n_LkF0o5dr8cdTE6ZqQ"

const Map = ReactMapboxGL({
  accessToken: TOKEN
});

class MyMap extends Component {

  markers = CITIES.map((city) => {
    return (
      <Feature
        coordinates={[city.lng, city.lat]}
        properties={city}
      />
    )
  })

  render() {
    return (
      <Map
        style={`mapbox://styles/rajatk16/ck01wvo1n3cn41co8qpcuv3uq`}
        center={[78.9629, 20.5937]}
        zoom={[4]}
        containerStyle={{
          marginTop: '50px',
          height: '60vh',
          width: '100%',
        }}
      >
        <Layer 
          type="circle" 
          id="marker" 
          paint={{
            'circle-color': "#FF5200",
            'circle-stroke-width': 1,
            'circle-stroke-color': "#FFF",
            'circle-stroke-opacity': 1
          }}
        >
          {this.markers}
        </Layer>
      </Map>
    )
  }
}

const mapStateToProps = (state) => ({
  loaded: state.coordinates.loaded,
  data: state.coordinates.data
})

export default connect(mapStateToProps)(MyMap);