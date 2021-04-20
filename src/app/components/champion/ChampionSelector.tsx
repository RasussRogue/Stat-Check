import React, {useCallback, useState} from "react";
import axios from 'axios';
import {Champion, Data} from "../model/models";
import {ChampionView} from "./ChampionView";
import {getUrlChampion, getUrlChampionAvatar, getUrlChampionList} from "../../config/config";
import {useFetchAPI} from "../../api/reducer";
import {Autocomplete} from "@material-ui/lab";
import {Avatar, List, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const ChampionSelector = () => {
    const [championId, setChampionId] = useState("Aatrox")
    const championListState = useFetchAPI<Data>({data: {}}, () => axios.get(getUrlChampionList()))
    const championState = useFetchAPI<Data>(undefined, () => axios.get(getUrlChampion(championId)), [championId])

    function extractChampionList(data: Data) {
        return Object.values(data.data) as Champion[]
    }

    function extractChampion(data: Data) {
        return Object.values(data.data)[0] as Champion
    }

    const handleTextViewChange = useCallback(
        (event, championChange) => {
            if (championChange) {
                setChampionId(championChange.id)
            }
        },
        [],
    );

    const useStyles = makeStyles(() => ({
        avatarSearch: {
            height: '12%',
            width: '12%',
            marginRight: '5%'
        }
    }));

    const classes = useStyles();

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            <Autocomplete
                id="champion-box-complete"
                options={extractChampionList(championListState.data as Data)}
                getOptionLabel={(option) => option.name}
                onChange={handleTextViewChange}
                renderOption={(option) => (
                    <React.Fragment>
                        <Avatar className={classes.avatarSearch} variant='square'
                                src={getUrlChampionAvatar(option.image.full)}/>
                        {option.name}
                    </React.Fragment>
                )}
                getOptionSelected={(option, value) => value.name === option.name}
                renderInput={
                    (params) => <TextField {...params} label="Champion" variant="outlined"/>
                }
            />
            {championState.isLoading || !championState.data ? <h1>Loading your champion...</h1> :
                <ChampionView champion={extractChampion(championState.data as Data)}/>}
        </List>
    )
}