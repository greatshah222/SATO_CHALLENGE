import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import moment from 'moment';

import theme from '../../theme';

import Datepicker, { PickerUtils } from './index';

const ExampleDatePicker = props => {
  const [selectedDate, setSelectedDate] = React.useState(props.time ? null : new moment('27-09-1988', 'DD-MM-YYYY'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // PickerUtils should be used in app root
  return (
    <PickerUtils locale={'fi'}>
      <Datepicker value={selectedDate} handleDateChange={handleDateChange} {...props} />
    </PickerUtils>
  );
};

storiesOf('Datepicker', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Datepicker', () => <ExampleDatePicker label="Basic example" />)
  .addWithJSX('Date of birth', () => (
    <ExampleDatePicker label="Date of Birth" openTo="year" views={['year', 'month', 'date']} disableFuture />
  ))
  .addWithJSX('Min and Max Dates', () => (
    <ExampleDatePicker
      label="Min Max"
      minDate={moment('27-09-1988', 'DD-MM-YYYY').subtract(2, 'days')}
      maxDate={moment('27-09-1988', 'DD-MM-YYYY').add(2, 'days')}
    />
  ))
  .addWithJSX('Disabled', () => <ExampleDatePicker disabled label="Disabled" />)
  .addWithJSX('TimePicker', () => <ExampleDatePicker label="Pick a time" time />);
