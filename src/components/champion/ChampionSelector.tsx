import React from "react";
import { useEffect, useState } from "react";
import { Champion, Data } from "../Model";
import { ChampionView } from "./ChampionView";


export const ChampionSelector = () => {
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
        <ChampionView champion={champion} />
    )
}