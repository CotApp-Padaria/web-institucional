import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {            
            main: purple[700],
        },
        secondary: {
            main: green[700]
        }        
    },
});

export default theme;
