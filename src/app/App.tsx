import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline, Paper} from "@material-ui/core";

const theme = createMuiTheme({
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
            main: '#3a22a5',
        },
        secondary: {
            main: '#e1bee7',
        },
        background: {
            default: '#1e1159',
        },
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper style={{height:'100vh', background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(30,17,89,1) 45%, rgba(30,17,89,1) 100%'}}>
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
            </Paper>
        </ThemeProvider>
    );
}
