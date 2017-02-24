import React, { PropTypes } from 'react';

import Control from './Control';

// If the child isn't already another Control element, we need to wrap it with a control
const Group = ({ children, ...props }) => (
  <Control grouped {...props}>
    {React.Children.map(children, (child) => {
      if (child.type && child.type.isControl) {
        return child;
      }

      return (
        <Control>
          {child}
        </Control>
      );
    })}
  </Control>
  );

Group.propTypes = {
  children: PropTypes.any,
};

Group.defaultProps = {
  children: null,
};


export default Group;
