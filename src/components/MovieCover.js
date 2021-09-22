import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import clock from '../svg/clock.svg'
import eye from '../svg/eye.svg'
import formatDuration from '../utils/formatDuration'
import formatViews from '../utils/formatViews'

const useStyles = makeStyles((theme) => ({
  genre: {
    backgroundColor: '#fed530',
    borderRadius: 10,
    width: 'auto',
    maxWidth: '26%',
    textAlign: 'center'
  },
  divGenre: {
    paddingTop: '2%',
    paddingLeft: '2%'
  },
  title: {
    color: 'white',
    fontSize: 35,
    alignSelf: 'flex-end'
  },
  clock: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  eye: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    marginRight: 10
  },
  duration: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 15,
  },
  containerDuration: {
    padding: '4%',
    position: 'absolute',
    bottom: 0
  },
  flex: {
    display: 'flex'
  },
  name: {
    display: 'block',
    fontSize: 36,
    lineHeight: '64px',
    fontWeight: 700
  }
}))
export default function MovieCover({ img, genre, name, duration, views, _id, size = 'sm' }) {
  const { hours, minutes } = formatDuration(duration)

  const history = useHistory()

  const handleOnClick = useCallback(() => {
    history.push(`/details/${_id}`)
  }, [_id])

  const classes = useStyles()
  const divStyle = {
    maxWidth: size === 'lg' ? 817 : 400,
    cursor: 'pointer',
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    objectFit: 'contain',
    height: 560,
    position: 'relative',
    opacity: 0.8,
    boxShadow: 'inset 0px -85px 400px -10px #000000',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px'
  }

  return (
    <div style={divStyle} onClick={handleOnClick}>
      <div className={classes.divGenre}>
        <div className={classes.genre}> {genre} </div>
      </div>
      <div className={classes.containerDuration}>
        <div className={classes.flex}>
          <img className={classes.clock} src={clock} alt='clock' />
          <div className={classes.duration}> {`${hours} hs ${minutes > 0 ? `${minutes} mins` : ''}`}</div>
          <img className={classes.eye} src={eye} alt='eye' />
          <div className={classes.duration}> {formatViews(views)} views</div>
        </div>
        <div className={classes.name}>
          <b>{name}</b>
        </div>

      </div>

    </div>)
}