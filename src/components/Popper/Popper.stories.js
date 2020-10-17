import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import Popper from './index.js';
import theme from '../../theme';
import Button from '../Button';
import Chip from '../Chip';
import ChevronDown from '../../icons/ChevronDown';
import { withBackgrounds } from '@storybook/addon-backgrounds';

export const bg = withBackgrounds([{ name: 'light grey', value: '#f2f2f2', default: true }]);

storiesOf('Popper', module)
  .addDecorator(bg)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ padding: '40px' }}>{story()}</div>)
  .addWithJSX('default', () => {
    const popperId = 'storybook-popper';
    return (
      <Popper
        popperId={popperId}
        button={(setAnchorEl, open, handleClick, popperId) => (
          <Button
            buttonRef={setAnchorEl}
            aria-owns={open ? popperId : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            Popper
          </Button>
        )}
      >
        <div style={{ width: '250px', height: '200px' }}>Content</div>
      </Popper>
    );
  })
  .addWithJSX('default, no side padding', () => {
    const popperId = 'storybook-popper2';
    return (
      <Popper
        popperId={popperId}
        paperNoSidePadding
        button={(setAnchorEl, open, handleClick, popperId) => (
          <Button
            buttonRef={setAnchorEl}
            aria-owns={open ? popperId : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            Popper
          </Button>
        )}
      >
        <div style={{ width: '250px', height: '200px' }}>Content</div>
      </Popper>
    );
  })
  .addWithJSX('From a Chip', () => {
    const popperId = 'storybook-popper3';
    return (
      <Popper
        popperId={popperId}
        paperNoSidePadding
        button={(setAnchorEl, open, handleClick, popperId) => (
          <Chip
            buttonRef={setAnchorEl}
            variant="white"
            clickable={true}
            onClick={handleClick}
            onDelete={handleClick}
            deleteIcon={<ChevronDown />}
            label="Click this Chip!"
          />
        )}
      >
        <div style={{ width: '250px', height: '200px' }}>Content</div>
      </Popper>
    );
  });
