import * as React from 'react';
import { useEffect, useState } from "react";
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast } from '@mdi/js';
import { Icon }  from '@mdi/react'
import { Data, Champion } from "./model";

type ChampionProps = Readonly<{
    champion:Champion
}>

export const ChampionDisplayed = () => {
    const [champion, setChampion] = useState<ChampionProps>();
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

    useEffect(() => {
        loadChampion();
    }, [])

    function loadChampion() {
        fetch(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/Aatrox.json`, {
            method: 'GET',
        }).then(response => response.json())
            .then(response => {
                const payload  = response as Data
                const champs = Object.values(payload.data) as Champion[]
                const champion = champs[0]
                setChampion({ champion } as ChampionProps)
            })
    }

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

/*
    function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault()
    const notLoaded = champions.slice();
    const hasLoaded = loadedChampions.slice().concat(champions[0])
    setChampions(notLoaded.slice(1, notLoaded.length))
    setLoadedChampions(hasLoaded)


    const championsDisplayed = loadedChampions.map(champion => <Champion champion={champion}/>);
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs>
                <Champion />
            </Grid>
            <Grid item xs>
                <Button variant="contained" onClick={(e: { preventDefault: () => void; }) => handleClick(e)}>Ajouter
                    des champions</Button>
            </Grid>
        </Grid>
    );
}*/