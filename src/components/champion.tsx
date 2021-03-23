import * as React from 'react';
// @ts-ignore
import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {FC, useEffect, useState} from "react";
// @ts-ignore
import {mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast} from '@mdi/js';
// @ts-ignore
import Icon from '@mdi/react'
// @ts-ignore
import { makeStyles } from '@material-ui/core/styles';
import { Champion, Data } from 'model';

interface ChampionProps {
    champion:Champion
}

const Champion: FC<ChampionProps> = ({champion}) => {
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
        <div>
            <ListItem key={champion.name}>
                <ListItemAvatar>
                    <Avatar alt='Aatrox' variant='square' src="http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Aatrox.png"/>
                </ListItemAvatar>
                <ListItemText primary='Aatrox' secondary='Fighter/Tank'/>
            </ListItem>
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
        </div>
    )
}

export const Champions = () => {
    const [champions, setChampions] = useState<Champion[]>([]);
    const [loadedChampions, setLoadedChampions] = useState<Champion[]>([]);

    useEffect(() => {
        loadChampion();
    }, [])


    function loadChampion() {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json`, {
            method: 'GET',
        }).then(response => response.json())
            .then(response => {
                const payload  = response as Data
                const champs = Object.values(payload.data) as Champion[]
                const allChamp= champions.slice().concat(champs)
                setChampions(allChamp)
            })
    }


    function handleClick(e: { preventDefault: () => void; }) {
        e.preventDefault()
        const notLoaded = champions.slice();
        const hasLoaded = loadedChampions.slice().concat(champions[0])
        setChampions(notLoaded.slice(1, notLoaded.length))
        setLoadedChampions(hasLoaded)
    }

    const championsDisplayed = loadedChampions.map(champion => <Champion champion={champion}/>);
    return (
        <Grid  container direction="column" alignItems="center">
            <Grid item xs>
                <List component="nav" aria-label="secondary mailbox folders">
                    {championsDisplayed}
                </List>
            </Grid>
            <Grid item xs>
                <Button variant="contained" onClick={(e: { preventDefault: () => void; }) => handleClick(e)}>Ajouter
                    des champions</Button>
            </Grid>
        </Grid>
    );
}