import { configure, setAddon } from '@storybook/react';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import JSXAddon from 'storybook-addon-jsx';
import '../assets/styles/typography.css';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzymeConfigure({ adapter: new Adapter() });
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(JSXAddon);
configure(loadStories, module);

const newViewports = {
  desktopSmall: {
    name: 'Desktop 1024x768',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop 1280x1024',
    styles: {
      width: '1280px',
      height: '1024px',
    },
  },
  desktopLarge: {
    name: 'Desktop 1440x900',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  desktopXLarge: {
    name: 'Desktop 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  desktopXXLarge: {
    name: 'Desktop 2560x1440',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
};

configureViewport({
  viewports: {
    ...newViewports,
    ...INITIAL_VIEWPORTS,
  },
  defaultViewport: 'responsive',
});
