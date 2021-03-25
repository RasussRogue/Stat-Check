import * as React from 'react';
import { FC } from "react";
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast } from '@mdi/js';
import { Icon }  from '@mdi/react'
import { Champion } from "../Model";

type ChampionProps = Readonly<{
    champion:Champion
}>

export const ChampionView: FC<ChampionProps> = ({ champion }) => {

    const useStyles = makeStyles({
        grid: {
            fontFamily: 'Roboto'
        },
        icon: {
            verticalAlign:'bottom',
            height:25,
            width:25
        }
    });

    const classes = useStyles();
    return (
        <List component="nav" aria-label="secondary mailbox folders">
            <ListItem key='IDCard'>
                <ListItemAvatar>
                    <Avatar alt='Aatrox' variant='square' src="http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Aatrox.png"/>
                </ListItemAvatar>
                <ListItemText primary='Aatrox' secondary='Fighter/Tank'/>
            </ListItem>
            <ListItem key='Stats'>
                <Grid className={classes.grid} container spacing={3}>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiFire}/> 0
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiSword}/> 0.651
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiPlusOutline}/> 580
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiFlash}/> 0
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiShield}/> 38
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiAxe}/> 60
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiCircleSlice8}/> 32
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiRunFast}/> 580
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    )
}

