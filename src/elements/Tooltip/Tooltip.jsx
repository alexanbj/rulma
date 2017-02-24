import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

import { PLACEMENTS, RIGHT } from '../../constants';

const Outer = styled.div`
  position: absolute;
  z-index: 1070;
  display: block;
  font-style: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  ${(props) => {
    switch (props.placement) {
      case 'top':
        return css`
          padding: 5px 0;
          margin-top: -3px;
        `;
      case 'right':
        return css`
          padding: 0 5px;
          margin-left: 3px;
        `;
      case 'left':
        return css`
          padding: 0 5px;
          margin-left: -3px;
        `;
      case 'bottom':
        return css`
          padding: 5px 0;
          margin-top: 3px;
        `;
    }
  }}
`;

const Inner = styled.div`
  max-width: 200px;
  padding: 3px 8px;
  color: #fff !important;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
  &:before {
    top: 50%;
    right: 0;
    margin-top: -5px;
    content: "";
    border-width: 5px 0 5px 5px;
    border-left-color: #000;
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
`;


const Tooltip = ({ id, placement, children, ...props }) => (
  <Outer id={id} {...props} placement={placement} role="tooltip">
    <Inner placement={placement}>
      {children}
    </Inner>
  </Outer>
  );

Tooltip.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Accessibility
  placement: PropTypes.oneOf(PLACEMENTS).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
};

Tooltip.defaultProps = {
  placement: RIGHT,
  show: false,
  className: null,
};

export default Tooltip;
