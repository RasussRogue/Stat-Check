import React, {FC} from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
    '@global': {
        html: {
            height: '100%',
        },
        body: {
            fontFamily: 'Rubik',
            color: theme.palette.common.white,
            height: '100%',
            background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(30,17,89,1) 45%, rgba(30,17,89,1) 100%)'
        }
    }
}))

export const GlobalStyleProvider: FC = ({children}) => {
    useStyles()
    return <div>{children}</div>
}