import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  constructor() {
    super();
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }

    this.portal = document.createElement('div');
    document.body.appendChild(this.portal);
    this.renderPortal();
  }

  componentDidUpdate() {
    this.renderPortal();
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }

    ReactDOM.unmountComponentAtNode(this.portal);
    document.body.removeChild(this.portal);
  }

  handleKeydown(e) {
    if (e.keyCode === 27) {
      // 27 = Esc
      this.props.onClose();
    }
  }

  renderPortal() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.props.children, this.portal);
  }

  render() {
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  closeOnEsc: PropTypes.bool,
  onClose: PropTypes.func,
};

Portal.defaultProps = {
  closeOnEsc: false,
  onClose: {},
};
