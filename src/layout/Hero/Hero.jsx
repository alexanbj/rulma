import React, { PropTypes } from 'react';

import classNames, { colorPropType, sizePropType } from '../../modifiers';

import HeroHeader from './HeroHeader';
import HeroBody from './HeroBody';
import HeroFooter from './HeroFooter';

const Hero = ({ bold, fullheight, ...props }) => {
  const [classes, restProps] = classNames(props, 'hero', {
    'is-bold': bold,
    'is-fullheight': fullheight,
  });
  return (
    <section className={classes} {...restProps} />
  );
};

Hero.propTypes = {
  bold: PropTypes.bool,
  color: colorPropType,
  fullheight: PropTypes.bool,
  size: sizePropType,
};

Hero.defaultProps = {
  bold: false,
  color: null,
  fullheight: false,
  size: null,
};

Hero.Header = HeroHeader;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

export default Hero;
