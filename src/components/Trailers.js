import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { getTrailers } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import Grid from '@mui/material/Grid'

const useStyles = makeStyles((theme) => ({
    container: {
        zIndex: 100,
        marginTop: '-5%',
        cursor: 'pointer'
    },
    title: {
        marginTop: 16,
        color: 'white',
        fontWeight: 700,
        fontSize: 32,
        lineHeight: '48px',
        marginBottom: 30
    },
    item: {
        marginLeft: 24
    },
    img: {
        maxWidth: 250
    },
    root: {
        justifyContent: 'space-between'
    }
}))


export default function Trailers() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const trailers = useSelector(state => state.trailers)
    useEffect(() => {
        if (!trailers) {
            dispatch(getTrailers())
        }
    }, [trailers])

    return (
        <div className={classes.container} >
            <div className={classes.title}>
                Trailers
            </div>
            <Grid container spacing={1} classes={{ root: classes.root }}>
                {trailers?.map((trailer) => (
                    <Grid item xs={2} classes={{ item: classes.item }} key={trailer._id}>
                        <img src={trailer.trailerImage} className={classes.img} />
                    </Grid>
                ))}
            </Grid>
        </div>)
}
