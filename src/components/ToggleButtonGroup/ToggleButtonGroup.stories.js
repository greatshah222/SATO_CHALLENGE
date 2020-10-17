import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import ToggleButtonGroup from './index';
import ToggleButton from '../ToggleButton/index';
import InputLabel from '../InputLabel/index';
import theme from '../../theme';

const ExampleToggleButtonGroup = ({ exclusive, ...rest }) => {
  const [selected, setSelectedDate] = React.useState(['2']);

  const handleChange = button => {
    setSelectedDate(button);
  };

  return (
    <React.Fragment>
      <InputLabel>What room type would you prefer?</InputLabel>
      <ToggleButtonGroup value={selected} exclusive={exclusive} onChange={(e, value) => handleChange(value)} {...rest}>
        <ToggleButton value="1" key="1">
          1h
        </ToggleButton>
        <ToggleButton value="2" key="2">
          2h
        </ToggleButton>
        <ToggleButton value="3" key="3">
          3h
        </ToggleButton>
        <ToggleButton value="4" key="4">
          4h
        </ToggleButton>
        <ToggleButton value="5" key="5">
          5h
        </ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>
  );
};

storiesOf('ToggleButtonGroup', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Exclusive group', () => {
    return <ExampleToggleButtonGroup exclusive={true} />;
  })
  .addWithJSX('Non-exclusive group', () => {
    return <ExampleToggleButtonGroup exclusive={false} />;
  })
  .addWithJSX('Error', () => {
    return <ExampleToggleButtonGroup exclusive={true} error helperText="Error!" />;
  });
