import styled from '@emotion/styled'
import { TPalette, TTypography } from '../../theme/config/types'


export const TypographyStyled = styled.p<{ color: keyof TPalette, font: keyof TTypography }>`
  color: ${({ theme, color }) => theme.palette[color].main};
  font-family: ${({ theme, font }) => theme.typography[font]};
`
