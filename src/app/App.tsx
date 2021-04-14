import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {theme} from "./theme/Theme"
import {GlobalStyleProvider} from "./theme/GlobalStyleProvider";

export const App = () => {
    document.title = "Stat Check"
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyleProvider>
                <CssBaseline/>
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
            </GlobalStyleProvider>
        </ThemeProvider>
    );
}
