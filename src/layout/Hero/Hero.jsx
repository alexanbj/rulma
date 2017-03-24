import React, { PropTypes } from 'react';

import modifiers, { colorPropType, sizePropType } from '../../modifiers';

import HeroHeader from './HeroHeader';
import HeroBody from './HeroBody';
import HeroFooter from './HeroFooter';

const Hero = ({ bold, fullheight, tag: Tag, ...props }) => {
  const [classes, restProps] = modifiers(props, 'hero', {
    'is-bold': bold,
    'is-fullheight': fullheight,
  });

  return (
    <Tag className={classes} {...restProps} />
  );
};

Hero.propTypes = {
  bold: PropTypes.bool,
  color: colorPropType,
  fullheight: PropTypes.bool,
  size: sizePropType,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Hero.defaultProps = {
  bold: false,
  color: null,
  fullheight: false,
  size: null,
  tag: 'section',
};

Hero.Header = HeroHeader;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

export default Hero;
