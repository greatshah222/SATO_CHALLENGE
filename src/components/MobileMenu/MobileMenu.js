import PropTypes from 'prop-types';
import React from 'react';
import MenuPane from './MenuPane';
import { findById, findParentById } from '../../utils';
import isEqual from 'lodash/isEqual';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: props.content,
      previousItem: null,
      toChild: true,
      backLabel: props.defaultBackLabel,
    };
  }

  // this function is here to check if current items subitems was updated
  // setState must be called manually to rerender lazy loaded subitems
  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevProps.content, this.props.content)) {
      if (!isEqual(prevState.currentItem.items, this.props.content.items)) {
        if (
          prevState.previousItem !== null &&
          this.state.previousItem !== null &&
          isEqual(prevState.previousItem, this.state.previousItem) &&
          isEqual(prevState.currentItem, this.state.currentItem)
        ) {
          const updatedItems = findById(prevState.currentItem.id, this.props.content.items);
          if (updatedItems) {
            this.setState({ currentItem: updatedItems });
          }
        }
      }
    }
  }

  goToChild = id =>
    this.setState({
      previousItem: this.state.currentItem,
      currentItem: findById(id, this.state.currentItem.items),
      toChild: true,
      backLabel: this.state.currentItem.label || this.props.defaultBackLabel,
      previousBackLabel: this.state.backLabel,
    });

  goBack = () => {
    const parent = findParentById(this.state.currentItem.id, this.props.content);
    const grandParent = findParentById(parent.id, this.props.content);
    this.setState({
      currentItem: parent,
      previousItem: this.state.currentItem,
      toChild: false,
      backLabel: grandParent && grandParent.label ? grandParent.label : this.props.defaultBackLabel,
      previousBackLabel: this.state.backLabel,
    });
  };

  render() {
    const { open, toggleMenu, ...rest } = this.props;
    const { currentItem, previousItem, toChild, backLabel, previousBackLabel } = this.state;

    return (
      <div>
        {previousItem && (
          <MenuPane
            direction={toChild ? 'right' : 'left'}
            visible={false}
            key={previousItem.id}
            goToChild={this.goToChild}
            goBack={this.goBack}
            hasParent={previousItem.id !== 'root'}
            toggleMenu={toggleMenu}
            currentItem={previousItem}
            backLabel={previousBackLabel}
            animate={true}
            {...rest}
          />
        )}
        <MenuPane
          direction={toChild ? 'left' : 'right'}
          visible={open}
          key={currentItem.id}
          goToChild={this.goToChild}
          goBack={this.goBack}
          hasParent={currentItem.id !== 'root'}
          toggleMenu={toggleMenu}
          currentItem={currentItem}
          backLabel={backLabel}
          animate={currentItem.id !== 'root' || !toChild}
          {...rest}
        />
      </div>
    );
  }
}

MobileMenu.propTypes = {
  content: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  defaultBackLabel: PropTypes.string.isRequired,
};

MobileMenu.defaultProps = {
  defaultBackLabel: '',
};

export default MobileMenu;
