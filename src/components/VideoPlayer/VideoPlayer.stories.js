import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs';

import VideoPlayer from './index';
import Card from '../Card';
import CardContent from '../CardContent';
import Text from '../Text';
import Grid from '../Grid';
import theme from '../../theme';
import Button from '../Button';

const vjsOptions = {
  autoPlay: false,
  controls: true,
  techOrder: ['youtube'],
  sources: [
    {
      src: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
      type: 'video/youtube',
    },
  ],
  youtube: { ytControls: 1 },
};

const vjsOptionsCard = {
  autoPlay: 'muted',
  controls: false,
  poster: '/helsinki.jpg',
  image: '/helsinki.jpg',
  isMobile: false,
  sources: [
    {
      src:
        'https://videos.ctfassets.net/z7ety0aygnfq/7dZigTcb5chalblR4VleA0/5dea8f125d1d14e99c26daf797abb212/SATOja_makuja_pihakestit_2019_FI.mp4',
      type: 'video/mp4',
    },
  ],
};

storiesOf('VideoPlayer', module)
  .addDecorator(muiTheme(Object.values(theme)))
  .addDecorator(
    withBackgrounds([{ name: 'light yellow', value: theme.morning.palette.background.pageContent, default: true }])
  )
  .addDecorator(withKnobs)
  .addWithJSX('default', () => <VideoPlayer options={vjsOptions} />)
  .addWithJSX('In a Card, autoplay', () => (
    <Grid container>
      <Grid item xs={6}>
        <Card>
          <VideoPlayer options={vjsOptionsCard} />
          <CardContent>
            <Text variant="h6" color="primary">
              Title
            </Text>
            <Text variant="body2">Here be content!</Text>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ))
  .addWithJSX('Multiple In a Card, semi-autoplay', () => (
    <Grid container>
      <Grid item xs={6}>
        <Card>
          <VideoPlayer options={vjsOptionsCard} />
          <CardContent>
            <Text variant="h6" color="primary">
              Title
            </Text>
            <Text variant="body2">Here be content!</Text>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <VideoPlayer options={vjsOptionsCard} />
          <CardContent>
            <Text variant="h6" color="primary">
              Title2
            </Text>
            <Text variant="body2">Here be content!</Text>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ))
  .addWithJSX('Multiple In a Card, autoplay', () => (
    <Grid container>
      <Grid item xs={6}>
        <Card>
          <VideoPlayer variant={'autoplay'} options={vjsOptionsCard} />
          <CardContent>
            <Text variant="h6" color="primary">
              Title
            </Text>
            <Text variant="body2">Here be content!</Text>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <VideoPlayer variant={'autoplay'} options={{ ...vjsOptionsCard, controls: true }} />
          <CardContent>
            <Text variant="h6" color="primary">
              Title2
            </Text>
            <Text variant="body2">Here be content!</Text>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ))
  .add('controlled', () => {
    function Parent({ children, ...props }) {
      const [state, setState] = useState();
      console.log('EY', state);
      return <div>{children(state, setState)}</div>;
    }

    return (
      <Parent>
        {(state, setState) => (
          <Grid container>
            <Grid item xs={6}>
              <Card>
                <VideoPlayer options={state} />
                <CardContent>
                  <Text variant="h6" color="primary">
                    Title
                  </Text>
                  <Text variant="body2">Here be content!</Text>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  vjsOptionsCard.sources[0].src =
                    vjsOptionsCard.sources[0].src ===
                    'https://videos.ctfassets.net/z7ety0aygnfq/7dZigTcb5chalblR4VleA0/d203833436ddace0d8328bbb5c55e815/SATOja_makuja_pihakestit_2019_ENG.mp4'
                      ? 'https://videos.ctfassets.net/z7ety0aygnfq/7dZigTcb5chalblR4VleA0/5dea8f125d1d14e99c26daf797abb212/SATOja_makuja_pihakestit_2019_FI.mp4'
                      : 'https://videos.ctfassets.net/z7ety0aygnfq/7dZigTcb5chalblR4VleA0/d203833436ddace0d8328bbb5c55e815/SATOja_makuja_pihakestit_2019_ENG.mp4';
                  setState(vjsOptionsCard);
                }}
              >
                Change Source
              </Button>
            </Grid>
          </Grid>
        )}
      </Parent>
    );
  });
