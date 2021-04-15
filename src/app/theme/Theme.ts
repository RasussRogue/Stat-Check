import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Rubik",
            "sans-serif",
            "Roboto",
        ].join(',')
    },

    palette: {
        type: 'dark',
        common:  {
            black: '#434449',
            white: '#EAEBF0'
        },
        primary: {
            main: '#17172E',
        },
        secondary: {
            main: '#3273FA',
        },
    },
});