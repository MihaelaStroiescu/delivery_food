import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) =>( <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>);
const API_KEY = 'AIzaSyCWVXpr-wheKhww_mdzk3NpliIjBZ3ECXg';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.66,
      lng: 25.61
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%', margin: '0 auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
         
        >
          <AnyReactComponent
            lat={45.66}
            lng={25.61}
            text={'Your Menu App'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;