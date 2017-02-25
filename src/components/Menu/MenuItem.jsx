import React, { Component } from 'react';


/*
 * This component can be stateless
 * and receive props and then decide whether it should be
 * open or closed
 * */
class MenuItem extends Component {
  state = {
    open: false,
  };

  render() {
    const { children, ...props } = this.props;
    const { open } = this.state;
    const hasSingleChild = children.constructor.name === 'Object';
    return (
      <li
        onClick={() => this.setState(prevState => ({ open: !prevState.open }))}
        {...props}
      >
        {hasSingleChild ? children : children[0]}
        {hasSingleChild ? null : open && children[1]}
      </li>
    );
  }
}


export default MenuItem;
