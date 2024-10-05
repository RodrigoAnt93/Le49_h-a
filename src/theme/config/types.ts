export type TPaletteValue = {
  light: string;
  second?: string;
  main: string;
  dark?: string;
};

export type TPalette = {
  primary: TPaletteValue;
  secondary: TPaletteValue;
  light: {
    main: string;
    dark: string;
  };
  dark: {
    main: string;
  };
  stone: {
    main: string;
  };
};

export type TMeasures = {
  baseline: number;
  radius: string;
  container: string;
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

export type TTypography = {
  Poppins: string;
  SansSerif: string;
  Lora: string;
  main?: string;
};

export interface IBFTTheme {
  palette: TPalette;
  measures: TMeasures;
  typography: TTypography;
}
