import React, { useMemo, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getMovieDetail, getHero } from '../redux/actions'
import { useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import IconButton from '@mui/material/IconButton'

import star from '../svg/star.svg'
import halfStar from '../svg/halfStar.svg'
import arrow from '../svg/arrow.svg'
import formatDuration from '../utils/formatDuration'

import { Loading, Nav, Button, Trailers, Footer } from './'

const useStyles = makeStyles((theme) => ({
  left: {
    width: '50%',
    position: 'absolute',
    height: '100vh',
  },
  title: {
    fontWeight: 700,
    lineHeight: '96px',
    marginTop: '6%',
    marginBottom: 14,
    fontSize: 72
  },
  rating: {
    marginBottom: 64
  },
  description: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '32px',
    color: '#E5E5E5',
    width: '53%'
  },
  descriptionList: {
    fontWeight: 500,
    lineHeight: '24px',
    color: '#FFFFFF',
    marginTop: 32,
    marginBottom: 51
  },
  descriptionItem: {
    marginBottom: 13
  },
  trailerContainer: {
    marginTop: 27
  }
}))


export default function MovieDetail() {
  const history = useHistory()
  const classes = useStyles()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, details: moviesDetail, hero } = useSelector(state => ({
    isLoading: state.isLoading,
    details: state.details,
    hero: state.hero,
  }))

  const movie = useMemo(() => {
    return id ? moviesDetail[id] : hero
  }, [id, moviesDetail, hero])

  const { hours, minutes } = formatDuration(movie?.duration)

  useEffect(() => {
    if (!movie && id) {
      dispatch(getMovieDetail(id))
    } else if (!hero && !id) {
      dispatch(getHero())
    }
  }, [moviesDetail, movie, id])

  const handleOnBack = useCallback(() => {
    history.push('/')
  }, [])

  const handleOnClickButton = useCallback(() => {
    window.open(
      `https://www.youtube.com/results?search_query=${movie.name}+trailer`,
      '_blank'
    )
  }, [movie])

  const divStyle = {
    height: '120vh',
    backgroundImage: `url(${movie?.coverImage})`,
    backgroundSize: 'cover',
    objectFit: 'contain',
    width: '55%',
    //  position: 'absolute',
    marginLeft: 'auto',
    marginTop: '-11%',
    right: 0,
    top: 0,
    backgroundRepeat: 'no-repeat'
  }
  let hasHalf = false
  let rating = []
  if (movie) {
    hasHalf = movie?.rating?.toString().includes('.')
    rating = movie?.rating?.toString().split('.')[0]
    rating = [...Array(parseInt(rating)).keys()]
  }

  return (
    !isLoading ? <>
      <Nav />
      {id && <IconButton onClick={handleOnBack}>
        <img src={arrow} alt='back' style={{ width: '24px' }} />
      </IconButton>}
      <div className={classes.left}>
        <div className={classes.title}>{movie?.name}</div>
        <div className={classes.rating}>
          {rating.map(i => <img src={star} alt='rating' style={{ width: '24px' }} key={i} />)}
          {hasHalf && <img src={halfStar} alt='rating' style={{ width: '24px' }} />}
        </div>
        <div className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
        <div className={classes.descriptionList}>
          <div className={classes.descriptionItem}>
            Genre : {movie?.genre}
          </div>
          <div className={classes.descriptionItem}>
            Duration : {`${hours} hs ${minutes > 0 ? `${minutes} mins` : ''}`}
          </div>
          <div className={classes.descriptionItem}>
            Ratings : {movie?.rating}
          </div>
        </div>
        <Button text={'Watch now'} onClick={handleOnClickButton} />
        <div className={classes.trailerContainer}>
        </div>
      </div>
      <div style={divStyle} />
      {/* si estamos en el detalle de la pelicula no muestro el trailer porque no hay forma de matchear
    la data que devuelve /trailers con la pelicula actual. */}
      {!id && <Trailers />}
      {id && <Footer />}
    </> : <Loading />
  )
}
