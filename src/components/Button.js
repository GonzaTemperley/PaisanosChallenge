import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    container: {
        height: 65,
        borderRadius: 36,
        backgroundColor: '#FED530',
        width: '45%',
        cursor: 'pointer'
    },
    text: {
        textAlign: 'center',
        verticalAlign: 'middle',
        color: '#2E2E2E',
        fontWeight: 700,
        fontSize: 24,
        lineHeight: '67.56px'
    }
}))


export default function Button({ text, onClick }) {
    const classes = useStyles()
    return (
        <div className={classes.container} onClick={onClick}>
            <div className={classes.text}>
                {text}
            </div>
        </div>)
}
