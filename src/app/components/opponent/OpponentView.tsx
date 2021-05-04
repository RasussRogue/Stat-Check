import {Champion} from "../model/models";
import * as React from "react";
import {FC} from "react";
import {IDCard} from "../commons/IDCard";
import {Accordion, AccordionDetails, AccordionSummary, Button, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

type OpponentProps = Readonly<{
    opponent: Champion
}>

export const OpponentView: FC<OpponentProps> = ({opponent}) => {
    const useStyles = makeStyles((theme: Theme) => ({
        accordion: {
            backgroundColor: theme.palette.primary.main,
            padding:"1%"
        },
        severityLevel: {
            backgroundColor: theme.palette.error.main,
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
        <React.Fragment>
            <Accordion className={classes.accordion}>
                <AccordionSummary>
                    <IDCard champion={opponent}/>
                    <div className={classes.severityBox}>
                        <Button
                            variant="contained"
                            className={classes.severityLevel}
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                        >
                            Extreme
                        </Button>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        {opponent.blurb}
                        <div className={classes.tipButtonsBox}>
                            <Button className={classes.tipButtons} variant="contained" color="secondary">
                                See Another Tip
                            </Button>
                        </div>
                        <TextField
                            label="Your tip"
                            placeholder="Example : Take TP, save your E..."
                            helperText="Write your tip for this matchup here, and we will add it to the list !"
                            fullWidth
                            multiline
                            rows = "3"
                            color = "secondary"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <div className={classes.tipButtonsBox}>
                            <Button className={classes.tipButtons} variant="contained" color="secondary">
                                Post a Tip
                            </Button>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    )
}