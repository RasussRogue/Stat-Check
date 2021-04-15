import * as React from 'react';
import {FC} from "react";
import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Slider,
    TextField, Theme,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast} from '@mdi/js';
import {Icon} from '@mdi/react'
import {Champion} from "../model/models";
import {Autocomplete} from "@material-ui/lab";

type ChampionProps = Readonly<{
    champion: Champion
    championsList: Champion[]
    callback: any
}>

export const ChampionView: FC<ChampionProps> = ({champion, callback, championsList}) => {
    document.title = "Champions"
    const useStyles = makeStyles((theme: Theme) => ({
        icon: {
            verticalAlign: 'bottom',
            height: 25,
            width: 25,
        },
        slider: {
            paddingTop: '14%'
        },
        statBox: {
            backgroundColor: theme.palette.primary.main
        },
        avatarSearch: {
            height: '22%',
            width: '22%',
            marginRight:'5%'
        }
    }));

    const classes = useStyles();

    return (
        <List component="nav" aria-label="secondary mailbox folders" style={{width: '18%', margin:'auto'}}>
            <Autocomplete
                id="champion-box-complete"
                options={championsList}
                getOptionLabel={(option) => option.name}
                onChange={callback}
                renderOption={(option) => (
                    <React.Fragment>
                        <Avatar className={classes.avatarSearch} src={"http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+option.name+".png"}/>
                        {option.name}
                    </React.Fragment>
                )}
                getOptionSelected={(option, value) => value.name === option.name}
                renderInput={
                    (params) => <TextField {...params} label="Champion" variant="outlined"/>
                }
            />

            <ListItem key='IDCard'>
                <ListItemAvatar>
                    <Avatar alt={champion.name} variant='square'
                            src={"http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+champion.name+".png"}/>
                </ListItemAvatar>
                <ListItemText primary={champion.name} secondary={champion.title}/>
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
                    color={"primary"}
                />
            </ListItem>
            <Box border={2} borderColor={"primary.main"} borderRadius={"borderRadius"} className={classes.statBox} boxShadow={3}>
                <ListItem key='Stats'>
                <Grid container spacing={2} alignItems={"baseline"} justify={"space-between"}>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiFire}/> 0
                    </Grid>
                    <Grid item xs={4}>
                        <Icon className={classes.icon} path={mdiSword}/> 0.651
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiPlusOutline}/> 580
                    </Grid>
                    <Grid item xs={4}>
                        <Icon className={classes.icon} path={mdiFlash}/> 0
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiShield}/> 38
                    </Grid>
                    <Grid item xs={4}>
                        <Icon className={classes.icon} path={mdiAxe}/> 60
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icon} path={mdiCircleSlice8}/> 32
                    </Grid>
                    <Grid item xs={4}>
                        <Icon className={classes.icon} path={mdiRunFast}/> 580
                    </Grid>
                  </Grid>
                </ListItem>
            </Box>
        </List>
    )
}