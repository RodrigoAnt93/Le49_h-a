import styled from "@emotion/styled";

import { getButtonVariantStyles } from "./variants";
import { TStyledButtonProps } from "./types";

export const ButtonWrapper = styled.button<TStyledButtonProps>`
  padding: 0.8rem 24px;
  font-size: 20px;
  border-radius: ${({ theme }) => theme.measures.radius};
  cursor: pointer;

  ${getButtonVariantStyles}

  ${({ fullWidth }) => fullWidth && `width: 100%;`};
`;
