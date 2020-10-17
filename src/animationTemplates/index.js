import * as designTokens from '../.generated/styles';

export const templates = {
  rise: {
    transitionProperty: 'transform, box-shadow',
    transitionDuration: designTokens.moderateTime,
    transitionTimingFunction: designTokens.performance,
    '--scaler': 1,
    transform: 'scale(var(--scaler))',
    '&:hover': {
      '--scaler': '1.05',
      boxShadow: designTokens.shadowHigh,
    },
  },
};
