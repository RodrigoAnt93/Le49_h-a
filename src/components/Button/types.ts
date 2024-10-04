import { TPalette } from "../../theme/config/types";

export type TStyledButtonProps = {
  color: keyof TPalette;
  fullWidth: boolean;
  variant: TButtonVariant;
};

export type TButtonVariant = "contained" | "outlined";
