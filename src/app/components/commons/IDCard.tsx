import {FC} from "react";
import {Champion} from "../model/models";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {getUrlChampionAvatar} from "../../config/config";
import * as React from "react";

type IDCardProps = Readonly<{
    champion: Champion
}>

export const IDCard: FC<IDCardProps> = ({champion}) => {
    const useStyles = makeStyles(() => ({
        avatarDisplay: {
            height: '70%',
            width: '70%',
        },
        itemTextSizePrimary: {
            fontSize: '2em'
        },
        itemTextSizeSecondary: {
            fontSize: '1.3em'
        }
    }));

    const classes = useStyles();

    return (
        <ListItem key='IDCard'>
            <ListItemAvatar>
                <Avatar className={classes.avatarDisplay} alt={champion.name} variant='square'
                        src={getUrlChampionAvatar(champion.image.full)}/>
            </ListItemAvatar>
            <ListItemText
                classes={{
                    primary: classes.itemTextSizePrimary,
                    secondary: classes.itemTextSizeSecondary
                }}
                primary={champion.name}
                secondary={champion.title}
            />
        </ListItem>
    )
}