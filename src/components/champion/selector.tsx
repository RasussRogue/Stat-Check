import React from "react";
import { useEffect, useState } from "react";
import { Champion, Data } from "../model";
import { ChampionView } from "./championview";


export const Selector = () => {
    const [champion, setChampion] = useState<Champion>();

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
                setChampion(champion  as Champion)
            })
    }

    return (
        <ChampionView champion={champion}/>
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