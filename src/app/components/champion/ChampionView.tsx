import * as React from 'react';
import {FC} from "react";
import {
    Avatar,
    Box, Fade,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Slider,
    TextField,
    Theme, Tooltip, Typography, withStyles,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {mdiSword, mdiFire, mdiPlusOutline, mdiFlash, mdiShield, mdiAxe, mdiCircleSlice8, mdiRunFast} from '@mdi/js';
import {Icon} from '@mdi/react'
import {Champion} from "../model/models";
import {Autocomplete} from "@material-ui/lab";
import {getUrlChampionAvatar, getUrlPassive, getUrlSpell} from "../../config/config";

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
            height: 30,
            width: 30,
            color: theme.palette.secondary.main
        },
        componentBox: {
            backgroundColor: theme.palette.primary.main,
            marginTop: '6%'
        },
        avatarSearch: {
            height: '12%',
            width: '12%',
            marginRight: '5%'
        },
        avatarDisplay: {
            height: '70%',
            width: '70%',
        },
        itemTextSizePrimary: {
            fontSize: '2em'
        },
        itemTextSizeSecondary: {
            fontSize: '1.3em'
        },
        abilityIcon: {
            marginRight: '3.6%'
        },
    }));

    const classes = useStyles();

    const AbilityTooltip = withStyles((theme: Theme) => ({
        tooltip: {
            backgroundColor: theme.palette.primary.main,
            fontSize: 14
        }
    }))(Tooltip)

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            <Autocomplete
                id="champion-box-complete"
                options={championsList}
                getOptionLabel={(option) => option.name}
                onChange={callback}
                renderOption={(option) => (
                    <React.Fragment>
                        <Avatar className={classes.avatarSearch}
                                src={getUrlChampionAvatar(option.name+".png")}/>
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
                    <Avatar className={classes.avatarDisplay} alt={champion.name} variant='square'
                            src={getUrlChampionAvatar(champion.name+".png")}/>
                </ListItemAvatar>
                <ListItemText
                    classes={{
                        primary: classes.itemTextSizePrimary,
                        secondary: classes.itemTextSizeSecondary
                    }}
                    primary={champion.name}
                    secondary={champion.title}
                />
            </ListItem>

            <ListItem key='Abilities'>
                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <Typography color="inherit">Deathbringer Stance</Typography><br/>
                        Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the
                        target's max health.
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlPassive("Aatrox_Passive.png")}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <Typography color="inherit">The Darkin Blade</Typography><br/>
                        Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a
                        different area of effect.
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell("AatroxQ.png")}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <Typography color="inherit">Infernal Chains</Typography><br/>
                        Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters
                        have to leave the impact area quickly or they will be dragged to the center and take the damage
                        again.
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell("AatroxW.png")}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <Typography color="inherit">Umbral Dash</Typography><br/>
                        Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell("AatroxE.png")}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <Typography color="inherit">World Ender</Typography><br/>
                        Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage,
                        increased healing, and movement speed. If he gets a takedown, this effect is extended.
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell("AatroxR.png")}/>
                </AbilityTooltip>
            </ListItem>

            <Box borderRadius={"borderRadius"} className={classes.componentBox} boxShadow={5}>
                <ListItem key='LevelSlider'>
                    <Slider
                        defaultValue={1}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="on"
                        step={1}
                        marks
                        min={1}
                        max={18}
                        color={"secondary"}
                    />
                </ListItem>
            </Box>

            <Box borderRadius={"borderRadius"} className={classes.componentBox} boxShadow={5}>
                <ListItem key='Stats'>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiFire}/> 0
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiSword}/> 0.651
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiPlusOutline}/> 580
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiFlash}/> 0
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiShield}/> 38
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiAxe}/> 60
                        </Grid>
                        <Grid item xs={4}>
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