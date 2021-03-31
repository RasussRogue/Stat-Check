import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";

export const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/champion">
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <ChampionPage/>
                        </Grid>
                    </Grid>
                </Route>
                <Route path="/">
                </Route>
            </Switch>
        </Router>
    );
}
