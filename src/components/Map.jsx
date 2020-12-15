import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbXNkdWJlcm5ldCIsImEiOiJja2dtOGs2cjIwMXY5MnVxcDhvMjM5bmk2In0.7a61eUcg2feA7_RZyinEng';

export default class Map extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       container: this.props.container,
       latitude: this.props.latitude,
       longitude: this.props.longitude
    }
  }
  

  componentDidMount() {
    /* eslint-disable no-unused-vars */
    var map = new mapboxgl.Map({
      container: this.state.container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-1.139698, 46.158067],
      // center: [this.state.longitude, this.state.latitude],
      zoom: 10
    });
    /* eslint-enable no-unused-vars */
  }

  render() {
    return (
      <div className={"container-map " + (this.props.home ? 'home-map' : '')}>
        <div id={this.state.container}></div>
      </div>
    )
  }
}
