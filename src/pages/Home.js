import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from '../redux/actions'
import { makeStyles } from "@material-ui/styles"
import Grid from '@mui/material/Grid'
import { MovieCover, MovieDetail, Loading, Footer } from '../components'


const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: 'black'
  },
  card: {
    width: '100%'
  },
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  homeContainer: {
    margin: 'auto',
    marginTop: '56px'
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    lineHeight: '64px',
    marginTop: '46px'
  },
  divider: {
    marginBottom: 16
  },
  root: {
    color: '#fed530',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 40
  }
}))

export default function Home() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { movies, isLoading } = useSelector(state => ({
    movies: state.movies,
    isLoading: state.isLoading
  }))

  useEffect(() => {
    if (!movies.length) {
      dispatch(getMovies())
    }
  }, [movies, dispatch])

  return (
    !isLoading ? <> <MovieDetail />
      <div className={classes.title}>
        Featured
      </div>
      <div className={classes.homeContainer}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <MovieCover size={'lg'} img={movies[0]?.coverImage} _id={movies[0]?._id} genre={movies[0]?.genre} name={movies[0]?.name} duration={movies[0]?.duration} views={movies[0]?.views} />
          </Grid>
          <Grid item xs={4}>
            <MovieCover img={movies[1]?.coverImage} _id={movies[1]?._id} genre={movies[1]?.genre} name={movies[1]?.name} duration={movies[1]?.duration} views={movies[1]?.views} />
          </Grid>
        </Grid>
        <div className={classes.divider} />
        <Grid container spacing={0}>
          {movies.slice(2, movies.length).map(element => {
            return (
              <Grid item xs={4} key={element._id}>
                <MovieCover img={element?.coverImage} _id={element?._id} genre={element?.genre} name={element?.name} duration={element?.duration} views={element?.views} />
              </Grid>
            )
          })}
        </Grid>
      </div> <Footer /> </> : <Loading />
  )
}