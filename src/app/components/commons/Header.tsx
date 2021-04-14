import * as React from "react";
import {AppBar, Button, createStyles, IconButton, SvgIcon, Theme, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HeaderIcon from "../../icons/header-icon.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        appBar: {
            marginBottom: '10px'
        }
    }),
);

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <SvgIcon component={HeaderIcon} viewBox="0 0 500 500" color="secondary"/>
                </IconButton>
                <Button href="/" color="inherit">Home</Button>
                <Button href="/champion" color="inherit">Champions</Button>
            </Toolbar>
        </AppBar>
    );
}