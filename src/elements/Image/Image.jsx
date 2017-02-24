import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
    };
    this.handleError = this.handleError.bind(this);
  }

  // Make sure we attempt to reload the image if applicable
  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src && this.state.hasErrored) {
      this.setState({ hasErrored: false });
    }
  }

  handleError() {
    if (this.props.hideOnError) {
      this.setState({ hasErrored: true });
    }
  }

  render() {
    if (this.state.hasErrored) {
      return null;
    }

    const { src, alt, dimension, ratio } = this.props;

    const classes = classNames('image', {
      [`is-${dimension}`]: dimension,
      [`is-${ratio}`]: ratio,
    });

    return (
      <figure className={classes}>
        <img src={src} alt={alt} onError={this.handleError} />
      </figure>
    );
  }
}

Image.propTypes = {
  dimension: PropTypes.oneOf([
    '16x16',
    '24x24',
    '32x32',
    '48x48',
    '64x64',
    '128x128',
  ]),
  hideOnError: PropTypes.bool,
  ratio: PropTypes.oneOf([
    'square',
    '1by1',
    '4by3',
    '3by2',
    '16by9',
    '2by1',
  ]),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: null,
  dimension: null,
  hideOnError: false,
  ratio: null,
};
