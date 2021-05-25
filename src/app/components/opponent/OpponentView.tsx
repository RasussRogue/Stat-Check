import {Champion, Matchup} from "../model/models";
import * as React from "react";
import {FC, useState} from "react";
import {IDCard} from "../commons/IDCard";
import {Accordion, AccordionDetails, AccordionSummary, Button, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getDifficultyButtonColor, getDifficultyButtonText} from "../../misc/utils";
import {setupFirestore} from "../../config/firebase";
import firebase from "firebase";

type OpponentProps = Readonly<{
    opponent: Champion
    matchup: Matchup
}>

export const OpponentView: FC<OpponentProps> = ({opponent, matchup}) => {
    const [tipValue, setTipValue] = useState(0)
    const [tipText, setTipText] = useState("")

    const db = setupFirestore()

    const useStyles = makeStyles((theme: Theme) => ({
        accordion: {
            backgroundColor: theme.palette.primary.main,
            padding: "1%"
        },
        accordionDetailsBox: {
            width: '100%'
        },
        severityButton: {
            backgroundColor: getDifficultyButtonColor(matchup) as string,
            height: "30%"
        },
        severityBox: {
            display: "flex",
            alignItems: "center",
        },
        tipButtonsBox: {
            display: "flex",
            justifyContent: "flex-end"
        },
        tipButtons: {
            margin: "3%"
        }
    }));

    const classes = useStyles();

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary>
                <IDCard champion={opponent}/>
                <div className={classes.severityBox}>
                    <Button
                        variant="contained"
                        className={classes.severityButton}
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        {getDifficultyButtonText(matchup)}
                    </Button>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.accordionDetailsBox}>
                    {matchup.tips[tipValue]}
                    <div className={classes.tipButtonsBox}>
                        <Button
                            className={classes.tipButtons}
                            variant="contained"
                            color="secondary"
                            onClick={() => setTipValue((tipValue + 1) % matchup.tips.length)}>
                            See Another Tip
                        </Button>
                    </div>
                    <TextField
                        label="Your tip"
                        placeholder="Example : Take TP, save your E..."
                        helperText="Write your tip for this matchup here, and we will add it to the list !"
                        fullWidth
                        multiline
                        rows="3"
                        color="secondary"
                        onChange={(event) => setTipText(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div className={classes.tipButtonsBox}>
                        <Button
                            className={classes.tipButtons}
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                const matchupRef = db.collection("matchups").doc(matchup.champion + matchup.opponent)
                                matchupRef.update({
                                    tips: firebase.firestore.FieldValue.arrayUnion(tipText)
                                }).then(response => console.log(response))
                            }}>
                            Post a Tip
                        </Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}