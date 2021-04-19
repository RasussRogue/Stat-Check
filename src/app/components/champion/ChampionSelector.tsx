import React, {useCallback, useEffect, useState} from "react";
import {Champion, Data} from "../model/models";
import {ChampionView} from "./ChampionView";
import {getUrlChampion, getUrlChampionList} from "../../config/config";
import axios from 'axios';
import {defaultChampion} from "./default";


export const ChampionSelector = () => {
    const [champion, setChampion] = useState<Champion>(defaultChampion);
    const [championsList, setChampionsList] = useState<Champion[]>([]);

    useEffect(() => {
        fetchChampionList()
    }, [])

    function fetchChampionList() {
        axios.get(getUrlChampionList(), {}).then(response => {
            const payload = response.data as Data
            const champs = Object.values(payload.data) as Champion[]
            setChampionsList(champs)
        })
    }

    function loadChampion(championSelected:string) {
        axios.get(getUrlChampion(championSelected), {}).then(response => {
            const payload = response.data as Data
            const champs = Object.values(payload.data) as Champion[]
            const champion = champs[0]
            setChampion(champion as Champion)
        })
    }

    const handleTextViewChange = useCallback(
        (event, champion) => {
            if (champion) {
                loadChampion(champion.id)
            }
        },
        [],
    );

    return (
        <ChampionView champion={champion} callback={handleTextViewChange} championsList={championsList}/>
    )
}