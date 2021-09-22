import React, { useCallback, useState } from "react"
import profile from '../svg/profile.svg'
import { makeStyles } from "@material-ui/styles"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Search from './Search'
import Modal from './Modal'
const useStyles = makeStyles(() => ({
    items: {
        fontSize: 15,
        marginLeft: 10,
        cursor: 'pointer',
        width: '10%',
        height: 31,
        "&:hover": {
            borderBottom: "2px solid #fed530",
        },
    },
    container: {
        top: 0,
        paddingTop: '1%',
        paddingBottom: '1%',
        display: 'flex',
        height: '48px',
        width: '100%',
        zIndex: 10,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        marginRight: 56,
        cursor: 'pointer'
    },
    profileContainer: {
        display: 'flex',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 24,
        marginRight: 90,
        cursor: 'pointer',
        alignItems: 'center'
    },
    profileIcon: {
        marginRight: 16
    },
    left: {
        marginLeft: 'auto',
        display: 'flex'
    }
}));


export default function Nav() {
    const [searchError, setSearchError] = useState(false)
    const history = useHistory()
    const classes = useStyles()
    const movies = useSelector(state => state.movies)
    const handleOnSearch = useCallback((value) => {
        const found = movies.find(movie => {
            const formattedMovieName = movie.name.toLowerCase().replace('-', '')
            return value && formattedMovieName.includes(value.toLowerCase())
        })
        if (found) {
            setSearchError(false)
            history.push(`/details/${found._id}`)
        } else if (value) {
            setSearchError(true)
        }
    }, [movies])

    const handleGoHome = useCallback(() => {
        history.push('/')
    }, [])

    const handleGoFooter = function () {
        window.location.hash = "#Footer";
    }

    const handleGoWIP = useCallback(() => {
        history.push('/wip')
    }, [])

    return (
        <div className={classes.container}>
            {searchError && <Modal title={'No results'} content={'Please, try again searching another movie :)'} />}
            <div className={classes.title} onClick={handleGoHome}>
                Paisaflix
            </div>
            <div className={classes.items} onClick={handleGoHome}>
                Home
            </div>
            <div className={classes.items} onClick={handleGoFooter}>
                Contact Us
            </div>
            <div className={classes.items} onClick={handleGoWIP}>
                Faq
            </div>
            <div className={classes.items} onClick={handleGoWIP}>
                Pricing
            </div>
            <div className={classes.left}>
                <Search onSearch={handleOnSearch} />
                <div className={classes.profileContainer}>
                    <img src={profile} alt='imageProfile' className={classes.profileIcon} />
                    Soy Paisanx
                </div>
            </div>

        </div>)
}