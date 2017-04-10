import React from 'react';
import PropTypes from 'prop-types';

export default class Toggler extends React.Component {
  constructor() {
    super();
    this.state = {
      value: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ value: !state.value }));
  }

  render() {
    return this.props.children(this.toggle, this.state.value);
  }
}

Toggler.propTypes = {
  children: PropTypes.func.isRequired,
};
