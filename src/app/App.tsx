import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Rubik",
            "sans-serif",
            "Roboto",
        ].join(',')
    },
    palette: {
        common:  {
            black: '#434449',
            white: '#EAEBF0'
        },
        primary: {
            main: '#455D8B',
        },
        secondary: {
            main: '#D0A85C',
        },

    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Header/>
            <Switch>
                <Route path="/champion">
                    <ChampionPage/>
                </Route>
                <Route path="/">
                </Route>
            </Switch>
        </Router>
        </ThemeProvider>
    );
}
