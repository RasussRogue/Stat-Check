import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {theme} from "./theme/Theme"
import {GlobalStyleProvider} from "./theme/GlobalStyleProvider";
import Grid from '@material-ui/core/Grid';

export const App = () => {
    document.title = "Stat Check"
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyleProvider>
                <CssBaseline/>
                <Header/>
                <Grid container spacing={3} justify='center'>
                    <Grid item md={4}>
                        <Routes/>
                    </Grid>
                </Grid>
            </GlobalStyleProvider>
        </ThemeProvider>
    );
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/champion">
                    <ChampionPage/>
                </Route>
                <Route path="/">
                </Route>
            </Switch>
        </Router>
    )
}
