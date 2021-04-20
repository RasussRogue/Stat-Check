import React, {useCallback, useEffect, useState} from "react";
import {Champion, Data} from "../model/models";
import {ChampionView} from "./ChampionView";
import {getUrlChampion, getUrlChampionList} from "../../config/config";
import axios from 'axios';
import {useFetchAPI} from "../../api/reducer";

export const ChampionSelector = () => {
    const [championId, setChampionId] = useState("Aatrox")
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

    function extractChampion(data:Data) {
        return Object.values(Object.values(data)[3])[0] as Champion
    }

    const {isLoading, data} = useFetchAPI<Data>(undefined, () => axios.get(getUrlChampion(championId)), [championId])

    const handleTextViewChange = useCallback(
        (event, championChange) => {
            if (championChange) {
                setChampionId(championChange.id)
            }
        },
        [],
    );

    return (
        isLoading || !data ? <h1>Loading champions...</h1> :
            // @ts-ignore
        <ChampionView champion={extractChampion(data)} callback={handleTextViewChange} championsList={championsList}/>
    )
}