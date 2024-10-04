import { TTypography } from "./types";

const typography: TTypography = {
  Poppins: "Poppins",
  Lora: "Lora",
  SansSerif: "sans-serif",
};

typography.main = `${typography.Poppins} ${typography.SansSerif}`;

export default typography;
