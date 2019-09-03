import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon} from 'semantic-ui-react';

import {displayChart, displayMap} from '../../redux/display/actions';

import './style.css';

class ButtonGroup extends Component {
  render() {
    const {displayChart, displayMap} = this.props;
    return (
      <div className="button-group">
        <div>
          <Button positive animated="fade" onClick={() => displayMap()}>
            <Button.Content visible>
              Show Map
            </Button.Content>
            <Button.Content hidden>
              <Icon name="map"/>
            </Button.Content>
          </Button>
        </div>
        <div>
          <Button primary animated="fade" onClick={() => displayChart()}>
            <Button.Content visible>
              Show Chart
            </Button.Content>
            <Button.Content hidden>
              <Icon name="chart line"/>
            </Button.Content>
          </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  displayChart: () => dispatch(displayChart()),
  displayMap: () => dispatch(displayMap())
})

export default connect(null, mapDispatchToProps)(ButtonGroup)