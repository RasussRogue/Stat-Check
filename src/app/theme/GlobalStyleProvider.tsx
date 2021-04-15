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
            background: '#070720'
        }
    }
}))

export const GlobalStyleProvider: FC = ({children}) => {
    useStyles()
    return <div>{children}</div>
}