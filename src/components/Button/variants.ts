import { Theme } from "@emotion/react";
import { TStyledButtonProps } from "./types";
import { TPaletteValue } from "../../theme/config/types";

type TButtonVariantProps = TStyledButtonProps & { theme: Theme };

const variantStyles = {
  outlined: ({ theme, color }: TButtonVariantProps) => `
    background: ${theme.palette.light.main};
    color: ${theme.palette[color].main};
    border: solid 1px ${(theme.palette[color] as TPaletteValue).main};
  `,
  contained: ({ theme, color }: TButtonVariantProps) => `
    background: ${theme.palette[color].main};
    color: ${theme.palette.light.main};
    border: solid 1px ${(theme.palette[color] as TPaletteValue).light};
  `,
};

export const getButtonVariantStyles = (props: TButtonVariantProps) => {
  const variantStyle = variantStyles[props.variant];

  if (!variantStyle)
    throw new Error(
      `Variant: ${props.variant} is not defined on the variant styles of Button Component`
    );

  return variantStyle(props);
};
