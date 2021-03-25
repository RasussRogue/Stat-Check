import * as React from "react";
import * as ReactDOM from "react-dom";
import { Champions } from "./components/champion";
import { Grid } from "@material-ui/core";


class Hello extends React.Component {

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Champions/>
                </Grid>
            </Grid>
        )
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("example")
);