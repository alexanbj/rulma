import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class MenuList extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  getChildContext() {
    return {
      isNestedMenuList: true,
    };
  }

  render() {
    const { className, ...props } = this.props;

    // A nested MenuList shouldn't have the menu-list class applied, utilizing context for this
    const classes = classNames(className, {
      'menu-list': !this.context.isNestedMenuList,
    });

    return <ul className={classes} {...props} />;
  }
}

MenuList.propTypes = {
  className: PropTypes.string,
};

MenuList.defaultProps = {
  className: null,
};

MenuList.contextTypes = {
  isNestedMenuList: React.PropTypes.bool,
};

MenuList.childContextTypes = {
  isNestedMenuList: React.PropTypes.bool,
};
