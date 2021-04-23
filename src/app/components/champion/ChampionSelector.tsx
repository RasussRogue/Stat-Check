import React, {useState} from "react";
import axios from 'axios';
import {Champion, Data} from "../model/models";
import {ChampionView} from "./ChampionView";
import {getUrlChampion, getUrlChampionAvatar, getUrlChampionList} from "../../config/config";
import {useFetchAPI} from "../../api/reducer";
import {Autocomplete} from "@material-ui/lab";
import {Avatar, List, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {extractChampion, extractChampionList} from "../../misc/utils";
import {Spinner} from "../commons/Spinner";

export const ChampionSelector = () => {
    const [championId, setChampionId] = useState("Aatrox")
    const championListState = useFetchAPI<Champion[], Data>([], () => axios.get(getUrlChampionList()), [], extractChampionList)
    const championState = useFetchAPI<Champion, Data>(undefined, () => axios.get(getUrlChampion(championId)), [championId], extractChampion)

    const useStyles = makeStyles(() => ({
        avatarSearch: {
            height: '12%',
            width: '12%',
            marginRight: '5%'
        },

    }));

    const classes = useStyles();

    return (
        <List>
            <Autocomplete
                id="champion-box-complete"
                options={championListState.data as Champion[]}
                getOptionLabel={(option) => option.id}
                onInputChange={(event, newInputValue) => {
                    if (newInputValue != '') {
                        setChampionId(newInputValue)
                    }
                }}
                renderOption={(option) => (
                    <React.Fragment>
                        <Avatar id={option.id} className={classes.avatarSearch} variant='square'
                                src={getUrlChampionAvatar(option.image.full)}/>
                        {option.name}
                    </React.Fragment>
                )}
                getOptionSelected={(option, value) => value.name === option.name}
                renderInput={
                    (params) => <TextField {...params} label="Champion" variant="outlined"/>
                }
            />
            {championState.isLoading || !championState.data ? <Spinner /> :
                <ChampionView champion={championState.data as Champion}/>}
        </List>
    )
}