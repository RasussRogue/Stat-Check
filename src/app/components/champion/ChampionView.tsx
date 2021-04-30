import * as React from 'react';
import {FC, useState} from 'react';
import {
    Avatar,
    Box,
    Fade,
    Grid, List,
    ListItem,
    Slider,
    Theme,
    Tooltip,
    withStyles,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {mdiAxe, mdiCircleSlice8, mdiFlash, mdiPlusOutline, mdiRunFast, mdiShield, mdiSword, mdiWater} from '@mdi/js';
import {Icon} from '@mdi/react'
import {Champion} from "../model/models";
import {getUrlPassive, getUrlSpell} from "../../config/config";
import {cleanCooldown, cleanDescription, computeStat} from "../../misc/utils";
import {IDCard} from "../commons/IDCard";

type ChampionProps = Readonly<{
    champion: Champion
}>

export const ChampionView: FC<ChampionProps> = ({champion}) => {
    const [championLevel, setChampionLevel] = useState(1)

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
        <List>
            <IDCard champion={champion}/>
            <ListItem key='Abilities'>
                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.passive.name}</h2>
                        {cleanDescription(champion.passive.description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlPassive(champion.passive.image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[0].name}</h2>
                        <h3>{'Cooldown : ' + cleanCooldown(champion.spells[0].cooldown)}</h3>
                        {cleanDescription(champion.spells[0].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[0].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[1].name}</h2>
                        <h3>{'Cooldown : ' + cleanCooldown(champion.spells[1].cooldown)}</h3>
                        {cleanDescription(champion.spells[1].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[1].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[2].name}</h2>
                        <h3>{'Cooldown : ' + cleanCooldown(champion.spells[2].cooldown)}</h3>
                        {cleanDescription(champion.spells[2].description)}
                    </React.Fragment>}>
                    <Avatar className={classes.abilityIcon} alt={champion.name} variant='square'
                            src={getUrlSpell(champion.spells[2].image.full)}/>
                </AbilityTooltip>

                <AbilityTooltip TransitionComponent={Fade} TransitionProps={{timeout: 600}} arrow title={
                    <React.Fragment>
                        <h2 color="inherit">{champion.spells[3].name}</h2>
                        <h3>{'Cooldown : ' + cleanCooldown(champion.spells[3].cooldown)}</h3>
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
                        onChangeCommitted={(object, value) => setChampionLevel(value as number)}
                    />
                </ListItem>
            </Box>

            <Box borderRadius={"borderRadius"} className={classes.componentBox} boxShadow={5}>
                <ListItem key='Stats'>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiPlusOutline}/>{computeStat(champion.stats.hp, champion.stats.hpperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiWater}/>{computeStat(champion.stats.mp, champion.stats.mpperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiAxe}/>{computeStat(champion.stats.attackspeed, champion.stats.attackspeedperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiShield}/>{computeStat(champion.stats.armor, champion.stats.armorperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiSword}/>{computeStat(champion.stats.attackdamage, champion.stats.attackdamageperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiFlash}/>{computeStat(champion.stats.crit, champion.stats.critperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiCircleSlice8}/>{computeStat(champion.stats.spellblock, champion.stats.spellblockperlevel, championLevel)}
                        </Grid>
                        <Grid item xs={4}>
                            <Icon className={classes.icon} path={mdiRunFast}/>{champion.stats.movespeed}
                        </Grid>
                    </Grid>
                </ListItem>
            </Box>
        </List>
    )
}