import * as React from 'react';
import {FC} from 'react';
import {
    Avatar,
    Box,
    Fade,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Slider,
    Theme,
    Tooltip,
    withStyles,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {mdiAxe, mdiCircleSlice8, mdiFlash, mdiPlusOutline, mdiRunFast, mdiShield, mdiSword, mdiWater} from '@mdi/js';
import {Icon} from '@mdi/react'
import {Champion} from "../model/models";
import {getUrlChampionAvatar, getUrlPassive, getUrlSpell} from "../../config/config";
import {cleanDescription} from "../../misc/utils";

type ChampionProps = Readonly<{
    champion: Champion
}>

export const ChampionView: FC<ChampionProps> = ({champion}) => {
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
        <React.Fragment>
            <ListItem key='IDCard'>
                <ListItemAvatar>
                    <Avatar className={classes.avatarDisplay} alt={champion.name} variant='square'
                            src={getUrlChampionAvatar(champion.image.full)}/>
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
                        <h2 color="inherit">{champion.passive.name}</h2><br/>
                        {cleanDescription(champion.passive.description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlPassive(champion.passive.image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[0].name}</h2><br/>
                        {cleanDescription(champion.spells[0].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[0].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[1].name}</h2><br/>
                        {cleanDescription(champion.spells[1].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[1].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[2].name}</h2><br/>
                        {cleanDescription(champion.spells[2].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[2].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[3].name}</h2><br/>
                        {cleanDescription(champion.spells[3].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[3].image.full)}/>
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
                            <Icon className={classes.icon} path={mdiPlusOutline}/>{champion.stats.hp}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiWater}/>{champion.stats.mp}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiRunFast}/>{champion.stats.movespeed}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiShield}/>{champion.stats.armor}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiSword}/>{champion.stats.attackdamage}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiFlash}/>{champion.stats.crit}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiCircleSlice8}/>{champion.stats.spellblock}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiAxe}/>{champion.stats.attackspeed}
                        </Grid>
                    </Grid>
                </ListItem>
            </Box>
        </React.Fragment>
    )
}