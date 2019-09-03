import React, {Component} from 'react'
import Papa from 'papaparse';
import {Input, Progress} from 'semantic-ui-react';
import {connect} from 'react-redux';


import {addData, beginDataLoad, dataLoaded} from '../../redux/coordinates/actions';

import './style.css';

class CSVInput extends Component {
  state = {
    percent: 0
  }

  handleChange = (event) => {
    if (event.target.files[0]) {
      this.props.beginDataLoad()
      this.setState({percent: 70})
      Papa.parse(event.target.files[0], {
        header: true,
        download: true,
        worker: true,
        chunk: this.updateData,
        complete: (results) => {
          this.setState({percent: 100})
          this.props.data.pop();
          this.props.dataLoaded();
        }
      })
    }
  }

  updateData = (result) => {
    return result.data.map(step => {
      return this.props.addData(step)
    })
  }

  render() {
    return (
      <div className="dropper">
        <Input 
          type="file" 
          accept=".csv, text/csv" 
          onChange={this.handleChange}
        />
        <div className="text">
          <h3>Upload a CSV File here</h3>
        </div>
        <Progress percent={this.state.percent} autoSuccess indicating size="tiny" />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addData: (data) => dispatch(addData(data)),
  beginDataLoad: () => dispatch(beginDataLoad()),
  dataLoaded: () => dispatch(dataLoaded())
})

const mapStateToProps = state => ({
  data: state.coordinates.data
})

export default connect(mapStateToProps, mapDispatchToProps)(CSVInput);