import React, { Component } from 'react';

import Slider from './index';

import Text from '../Text';
import Grid from '../Grid';

class SliderExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 50,
    };
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Text>Value is {this.state.value}</Text>
        </Grid>

        <Grid item xs={12} style={{ paddingTop: '15px' }}>
          <Slider
            color="secondary"
            min={0}
            max={100}
            step={1}
            onChange={(e, value) => this.setState({ value })}
            value={this.state.value}
          />
        </Grid>
      </Grid>
    );
  }
}

export default SliderExample;
