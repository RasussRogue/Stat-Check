import {CircularProgress} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export const Spinner = () => {
    const useStyles = makeStyles(() => ({
    loaderBox: {
        width: '100%',
            textAlign: 'center',
            marginTop: '30%'
        }
    }))

    const classes = useStyles();

    return (
        <div className={classes.loaderBox}>
            <CircularProgress color="secondary" size={80}/>
        </div>
    )
}