import { Global, ThemeProvider } from "@emotion/react";

// TODO: configure project folder alias
import theme from "../../theme";
import { globals } from "../../theme/globals";

interface LPThemeProviderProps {
  children: React.ReactNode;
}

function LPThemeProvider({ children }: LPThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />

      {children}
    </ThemeProvider>
  );
}

export default LPThemeProvider;
