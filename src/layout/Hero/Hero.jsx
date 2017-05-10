import React from 'react';
import PropTypes from 'prop-types';

import modifiers, { colorPropType, sizePropType } from '../../modifiers';

import HeroHeader from './HeroHeader';
import HeroBody from './HeroBody';
import HeroFooter from './HeroFooter';

const Hero = ({ as: ElementType, bold, fullHeight, ...props }) => {
  const [classes, restProps] = modifiers(props, 'hero', {
    'is-bold': bold,
    'is-fullheight': fullHeight,
  });

  return <ElementType className={classes} {...restProps} />;
};

Hero.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  bold: PropTypes.bool,
  color: colorPropType,
  fullHeight: PropTypes.bool,
  size: sizePropType,
};

Hero.defaultProps = {
  as: 'section',
  bold: false,
  color: null,
  fullHeight: false,
  size: null,
};

Hero.Header = HeroHeader;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

export default Hero;
