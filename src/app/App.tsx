import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ChampionPage} from "./components/champion";
import {Header} from "./components/commons/Header";

export const App = () => {
    return (
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
    );
}
