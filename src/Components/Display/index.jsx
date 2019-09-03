import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Message} from 'semantic-ui-react'

import MyMap from '../Map'
import LineChart from '../LineChart';

class Display extends Component {
  render() {
    const {map, chart} = this.props;
    if (map) {
      return (
        <MyMap/>
      )
    }
    if (chart) {
      return (
        <LineChart/>
      )
    }
    return (
      <Message size="large" header="Upload a CSV, or click on one of the buttons"/>
    )
  }
}

const mapStateToProps = state => ({
  map: state.display.map,
  chart: state.display.chart
})

export default connect(mapStateToProps)(Display)