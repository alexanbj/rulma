import React from 'react';
import classNames, { modifierPropTypes } from '../../modifiers';

const Footer = (props) => {
  const [classes, restProps] = classNames(props, 'footer');
  return <footer className={classes} {...restProps} />;
};

Footer.propTypes = {
  ...modifierPropTypes,
};

export default Footer;
