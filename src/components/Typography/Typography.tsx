import { TPalette, TTypography } from "../../theme/config/types";
import { TypographyStyled } from "./styled";

export interface TypographyProps {
  children: any;
  component: any;
  color?: keyof TPalette;
  font?: keyof TTypography;
  className?: any;
}

function Typography({
  children,
  component,
  color = "light",
  font = "Lora",
  className,
}: TypographyProps) {
  return (
    <TypographyStyled
      as={component}
      color={color}
      font={font}
      className={className}
    >
      {children}
    </TypographyStyled>
  );
}

export default Typography;
