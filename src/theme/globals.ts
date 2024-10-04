import { css } from "@emotion/react";
import theme from ".";

export const globals = css(`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${theme.palette.dark.main};
    }    
`);
