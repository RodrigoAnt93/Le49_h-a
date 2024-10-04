import { TPalette, TTypography } from "../../theme/config/types";

type TTypographyVariant = "h1" | "h2"| "body1" | "body2";

export type TStyledTypographyProps = {
  color: keyof TPalette;
  font: TTypography;
  variant: TTypographyVariant;
};

