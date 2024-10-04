import { TStyledTypographyProps } from "./types";

const variantStyles = {
  h1: ({ variant }: TStyledTypographyProps) => `
    font-size: ${variant};
  `,
  h2: ({ variant }: TStyledTypographyProps) => `
    font-size: ${variant};
  `,
  body1: ({ variant }: TStyledTypographyProps) => `
    font-size: ${variant};
  `,
  body2: ({ variant }: TStyledTypographyProps) => `
    font-size: ${variant};
  `,
};

export const getTypographyVariantStyles = (props: TStyledTypographyProps) => {
  const variantStyle = variantStyles[props.variant];

  if (!variantStyle)
    throw new Error(
      `Variant: ${props.variant} is not defined on the variant styles of Button Component`
    );

  return variantStyle(props);
};