import React, {useCallback} from "react";
import { useEffect, useState } from "react";
import { Champion, Data } from "../model/models";
import { ChampionView } from "./ChampionView";


export const ChampionSelector = () => {
    const [champion, setChampion] = useState<Champion>({name: 'Aatrox', title: 'the Destroyer', blurb : 'Placeholder'},);

    const championsList = [
        {name: 'Aatrox', title: 'the Destroyer', blurb : 'Placeholder'},
        {name: 'Gangplank', title: 'the Pirate', blurb : 'Placeholder'},
        {name: 'Yorick', title: 'the Grave digger', blurb : 'Placeholder'},
        {name: 'Ahri', title: 'the Cat', blurb : 'Placeholder'},
    ]

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
                setChampion(champion as Champion)
            })
    }

    const handleTextViewChange = useCallback(
        (event, champion) => {
            if (champion) setChampion(champion as Champion)
        },
        [],
    );


    return (
        <ChampionView champion={champion} callback={handleTextViewChange} championsList={championsList}/>
    )
}