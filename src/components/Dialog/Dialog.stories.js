import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import { DialogContent, DialogTitle, DialogActions, withMobileDialog, DialogCloseButton } from './index';
import theme from '../../theme';
import Text from '../Text';
import Dialog from './Dialog';
import Button from '../Button';

import PropTypes from 'prop-types';

const ExampleDialog = ({ fullScreen }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        <Text>open dialog</Text>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <Text>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae lorem ex. Nulla varius erat lorem,
            et tristique odio placerat tincidunt. Mauris auctor, eros vel placerat fringilla, nibh purus porta velit, id
            pulvinar mauris diam sed nulla. Donec cursus condimentum lacinia. Sed malesuada aliquam felis, eu hendrerit
            neque.
          </Text>
        </DialogContent>
        <DialogActions>
          <DialogCloseButton onClick={handleClose} label="close" />
        </DialogActions>
      </Dialog>
    </div>
  );
};

ExampleDialog.propTypes = {
  fullScreen: PropTypes.bool,
};

storiesOf('Dialog', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addWithJSX('Alert', () => <ExampleDialog />);
