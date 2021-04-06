import * as React from 'react';
import {FC} from "react";
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Slider, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast} from '@mdi/js';
import {Icon} from '@mdi/react'
import {Champion} from "../model/models";
import {Autocomplete} from "@material-ui/lab";


type ChampionProps = Readonly<{
    champion: Champion
}>

export const ChampionView: FC<ChampionProps> = ({champion}) => {
    const useStyles = makeStyles({
        grid: {
            fontFamily: 'Roboto'
        },
        icon: {
            verticalAlign: 'bottom',
            height: 25,
            width: 25,
            opacity: 0.80
        },
        slider: {
            color: 'black',
            paddingTop: '14%'
        },
        statsBox: {
            border: 'solid'
        }
    });

    const classes = useStyles();
    const championsList = [
        'Aatrox',
        'Ahri',
        'Gangplank',
        'Irelia'
    ]

    return (
        <List component="nav" aria-label="secondary mailbox folders" style={{width: '17%'}}>
            <Autocomplete
                id="combo-box-demo"
                options={championsList}
                style={{width: '60%'}}
                renderInput={
                    (params) => <TextField {...params} label="Champion" variant="outlined"/>
                }
            />
            <ListItem key='IDCard'>
                <ListItemAvatar>
                    <Avatar alt='Aatrox' variant='square'
                            src="http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Aatrox.png"/>
                </ListItemAvatar>
                <ListItemText primary='Aatrox' secondary='Fighter/Tank'/>
            </ListItem>
            <ListItem key='LevelSlider'>
                <Slider
                    className={classes.slider}
                    defaultValue={1}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="on"
                    step={1}
                    marks
                    min={1}
                    max={18}
                />
            </ListItem>
            <ListItem key='Stats' className={classes.statsBox}>
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