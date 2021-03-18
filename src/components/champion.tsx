import * as React from 'react';

import {
    Avatar,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
    // @ts-ignore
} from "@material-ui/core";
import {FC, useEffect, useState} from "react";

interface Data {
    data:any
}

interface Champion {
    name:string,
    title:string,
    blurb:string
}

interface ChampionProps {
    champion:Champion
}


const Champion: FC<ChampionProps> = ({champion}) => {
    return (
        <div>
            <ListItem key={champion.name}>
                <ListItemAvatar>
                    <Avatar alt='Aatrox' src="http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/Aatrox.png"></Avatar>
                </ListItemAvatar>
                <ListItemText primary='Aatrox' secondary='Fighter/Tank'/>
            </ListItem>
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