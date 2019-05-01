import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { flex, drawDebug, breakpoints } from "../helpers";
import { withBreakpoints } from "./Provider";
import Base from "./Base";

export const Box = styled(Base("div"))`
  ${props => props.fluid && "padding: 0;"} box-sizing: border-box;
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
  ${props => breakpoints(props)};
`;

Box.propTypes = {
  // Debug Properties
  debug: PropTypes.bool,
  // Flex-specific Properties
  flex: PropTypes.bool,
  fill: PropTypes.bool,
  fluid: PropTypes.bool,
  hiftRight: PropTypes.bool,
  shiftleft: PropTypes.bool,
  shiftup: PropTypes.bool,
  shiftdown: PropTypes.bool,
  ...Base.propTypes,
};

Box.defaultProps = {
  debug: false,
  fill: false,
  ...Base.defaultProps,
};

export default withBreakpoints(Box);
