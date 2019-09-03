import React, {Component} from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot, 
  XAxis, 
  YAxis, 
  HorizontalGridLines, 
  VerticalGridLines, 
  LineMarkSeries
} from 'react-vis'

import './style.css';

class LineChart extends Component {
  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ]
    return (
      <div className="line-chart">
        <XYPlot height={500} width={500}>
          <HorizontalGridLines/>
          <VerticalGridLines/>
          <XAxis/>
          <YAxis/>
          <LineMarkSeries data={data}  />
        </XYPlot>
      </div>
    )
  }
}

export default LineChart;