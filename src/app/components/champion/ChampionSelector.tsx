import React, {useState} from "react";
import axios from 'axios';
import {Champion, Data, Matchup} from "../model/models";
import {ChampionView} from "./ChampionView";
import {getUrlChampion, getUrlChampionAvatar, getUrlChampionList} from "../../config/config";
import {useFetchAPI, useFetchFirebase} from "../../api/reducer";
import {Autocomplete} from "@material-ui/lab";
import {Avatar, Grid, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {extractChampion, extractChampionList, getChampionByName} from "../../misc/utils";
import {Spinner} from "../commons/Spinner";
import 'firebase/firestore';
import {dataToOpponents, setupFirestore} from "../../config/firebase";
import firebase from "firebase";
import {OpponentView} from "../opponent/OpponentView";
import DocumentData = firebase.firestore.DocumentData;
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export const ChampionSelector = () => {
    const [championId, setChampionId] = useState("Aatrox")
    const opponentListState = useFetchFirebase<QuerySnapshot<DocumentData>, Matchup[]>(
        [],
        () => db.collection("matchups").where("champion", "==", championId).get(),
        [championId],
        dataToOpponents)
    const championListState = useFetchAPI<Data, Champion[]>([], () => axios.get(getUrlChampionList()), [], extractChampionList)
    const championState = useFetchAPI<Data, Champion>(undefined, () => axios.get(getUrlChampion(championId)), [championId], extractChampion)

    const db = setupFirestore()

    const useStyles = makeStyles(() => ({
        avatarSearch: {
            height: '12%',
            width: '12%',
            marginRight: '5%'
        },

    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item md={4}>
                <Autocomplete
                    id="champion-box-complete"
                    options={championListState.data as Champion[]}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, newValue) => {
                        if (newValue) {
                            setChampionId((newValue as Champion).id as string)
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
                {championState.isLoading || !championState.data ? <Spinner/> :
                    <ChampionView champion={championState.data as Champion}/>}
            </Grid>
            <Grid item md={4}>
                {championListState.isLoading || (championListState.data as Champion[]).length <= 0  || opponentListState.isLoading ?
                    <Spinner/> :
                    (opponentListState.data as Matchup[]).map((opponent) => <OpponentView
                        opponent={getChampionByName(championListState.data as Champion[], opponent.opponent)} matchup = {opponent}/>)}

            </Grid>
        </React.Fragment>
    )
}