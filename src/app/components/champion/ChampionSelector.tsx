import React, {useCallback} from "react";
import {useEffect, useState} from "react";
import {Champion, Data} from "../model/models";
import {ChampionView} from "./ChampionView";
import axios from 'axios';


export const ChampionSelector = () => {
    const [champion, setChampion] = useState<Champion>({name: 'Aatrox', title: 'the Destroyer', blurb: 'Placeholder'},);
    const [championsList, setChampionsList] = useState<Champion[]>([]);

    useEffect(() => {
        if (championsList.length == 0) fetchChampionList()
        loadChampion();
    }, [])

    function fetchChampionList() {
        axios.get(`https://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion.json`, {}).then(response => {
            const payload = response.data as Data
            const champs = Object.values(payload.data) as Champion[]
            console.log(champs)
            setChampionsList(champs)
        })
    }

    function loadChampion() {
        axios.get(`https://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/Aatrox.json`, {}).then(response => {
            const payload = response.data as Data
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