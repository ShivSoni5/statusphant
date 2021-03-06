import styled, { css } from "styled-components";

import { Box } from "reflexbox";

export const Title = styled(Box)`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 2.2rem;
  font-weight: 700;
  cursor: pointer;
  ${({ theme: { colors } }) => css`
    color: ${colors.green[800]};
  `}
`;
