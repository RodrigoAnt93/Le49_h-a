import "@emotion/react";
import { IBFTTheme } from "./config/types";

declare module "@emotion/react" {
  export interface Theme extends IBFTTheme {}
}
