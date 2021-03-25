import * as React from "react";
import { Grid } from "@material-ui/core";
import { Selector } from "./selector";

export class ChampionPage extends React.Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs>
                    <Selector  />
                </Grid>
            </Grid>
        )
    }
}