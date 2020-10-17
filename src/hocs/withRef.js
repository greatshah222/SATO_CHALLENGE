import React, { forwardRef } from 'react';

export const withRef = WrappedComponent => {
  class WithRef extends React.Component {
    render() {
      return <WrappedComponent ref={this.ref} {...this.props} />;
    }
  }
  return forwardRef((props, ref) => {
    return <WithRef {...props} ref={ref} />;
  });
};
