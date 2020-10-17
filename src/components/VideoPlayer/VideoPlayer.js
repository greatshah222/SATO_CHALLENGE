import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import videojs from 'video.js';
import { withStyles } from '@material-ui/core/styles';
import 'videojs-youtube';

import 'video.js/dist/video-js.css';

const styles = theme => ({
  '@global': {
    '.vjs-custom': {
      '&:hover': {
        '& .vjs-big-play-button': {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
      '& .vjs-big-play-button': {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        borderColor: 'transparent',
        height: '90px',
        width: '90px',
        borderRadius: '64px',
        [theme.breakpoints.down('sm')]: {
          height: '72px',
          width: '72px',
        },
        '&:hover, &:focus': {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          outline: 'none',
        },
        '& .vjs-icon-placeholder::before': {
          content:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAAXNSR0IArs4c6QAAAShJREFUSA21VrsNwjAQjWno6NiBihFoKED0zECBWAWxBoEWOnoaJDrEChmAAiTCM0oky77zN450yn18792TbSWiaJ66rsdwJ7A+7CKEuDel9BfAd7AvTH32CIbJ6ABZqaiaXyFeJpEA4KaBUmGJZJwaNL4pRCIXp4YAcqXC1LjQmLq/GgbAN+1W44tkWWdXY2kMLdFqQlEc6001jobYslQzkBdUSISkm8o3X1Ga5iSQ1OseP0AnlUVugiI3wSnnHvw3OZeCI3Zwhq/iq4g96Exf1ot2AKn5UWImCUmbU6snPASJWEtP3QGBfepEAvfUGsGHkE6l/KfWCB4UmpYrEZsnRAXifDRuNDA1jJtaJwPiVkVt/E5+HUVLBtAR/DlM5s645s+2lvL+AdY72y/01VNUAAAAAElFTkSuQmCC)',
          top: '22px',
          left: '4px',
          [theme.breakpoints.down('sm')]: {
            top: '12px',
          },
        },
      },
      '& .vjs-poster': {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      '& .vjs-error-display': {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        '&::before': {
          content: 'none',
        },
      },
    },
    '.vjs-no-default-controls': {
      '&:hover': {
        '& .vjs-control-bar': {
          display: 'none',
        },
      },
      '& .vjs-control-bar': {
        display: 'none',
      },
    },
  },
});

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    const { options } = this.props;
    const defaultOptions = {
      fluid: true,
      notSupportedMessage: ' ',
    };
    this.combinedOptions = Object.assign(defaultOptions, options);
    // Never autoplay on desktop (see render).
    if (this.getInitialAutoPlayState()) {
      if (props.variant === 'autoplay') {
        this.autoPlay = true;
      } else {
        if (this.combinedOptions.isMobile) this.autoPlay = true;
        else this.autoPlay = false;
      }
    } else this.autoPlay = false;
  }

  _initPlayer() {
    this.player = videojs(this.videoNode, this.combinedOptions);
    if (this.combinedOptions.sources) {
      this.player.src(this.combinedOptions.sources[0]);
    }
    if (this.combinedOptions.image) {
      const ErrorDisplay = this.player.getChild('ErrorDisplay');
      ErrorDisplay.setAttribute('style', `background-image: url("${this.combinedOptions.image}")`);
    }

    if (this.autoPlay && this.props.variant !== 'autoplay') {
      this.player.ready = () => {
        this.tryToPlay();
      };
    }
    // Getting around setLoop(true) not working after player is initialized.
    if (!this.combinedOptions.isMobile && this.props.variant !== 'autoplay') {
      this.player.on('ended', () => {
        this.tryToPlay();
      });
    }
  }

  componentDidMount() {
    this._initPlayer();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.options !== this.props.options) {
      console.log('Updated with different options', this.props.options);
      const defaultOptions = {
        fluid: true,
        notSupportedMessage: ' ',
      };
      this.combinedOptions = Object.assign(defaultOptions, this.props.options);
      this._initPlayer();
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  tryToPlay() {
    // We can never be sure that autoplay actually works.
    // This is here to make sure that if it doesn't, we at the very least show controls so the user can play the video manually.
    if (this.player && this.props.variant !== 'autoplay') {
      const promise = this.player.play();
      if (promise) {
        promise
          .then(() => {
            // Autoplay success.
            this.player.muted(true);
          })
          .catch(error => {
            this.player.controls(true);
          });
      }
    }
  }

  stop() {
    if (this.player && this.props.variant !== 'autoplay') {
      this.player.pause();
    }
  }

  getInitialAutoPlayState() {
    return this.combinedOptions.autoPlay === true || this.combinedOptions.autoPlay === 'muted';
  }

  showDefaultControls() {
    if (this.combinedOptions.controls) {
      if (this.combinedOptions.techOrder) {
        if (this.combinedOptions.techOrder.includes('youtube')) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  render() {
    return (
      <div
        data-vjs-player
        // On desktop we only play when user hovers over the element when autoplay is true.
        onMouseOver={!this.combinedOptions.isMobile && this.getInitialAutoPlayState() ? () => this.tryToPlay() : null}
        onMouseLeave={!this.combinedOptions.isMobile && this.getInitialAutoPlayState() ? () => this.stop() : null}
      >
        <video
          autoPlay={this.autoPlay}
          loop={this.autoPlay}
          muted={this.autoPlay}
          ref={node => (this.videoNode = node)}
          className={classNames('video-js', 'vjs-custom', { ['vjs-no-default-controls']: !this.showDefaultControls() })}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  options: PropTypes.shape({
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  variant: PropTypes.string,
};

export default withStyles(styles)(VideoPlayer);
