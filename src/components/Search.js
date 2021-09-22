import React, { useState, useCallback } from "react"
import lupa from '../svg/lupa.svg'

import { makeStyles } from "@material-ui/styles"
import InputBase from '@mui/material/InputBase'

const useStyles = makeStyles(() => ({
    inputFocus: {
        borderBottom: "2px solid #fed530",
    },
    root: {
        height: 31,
    },
    searchIcon: {
        width: '20px', color: 'white'
    },
    search: {
        display: 'flex',
        marginRight: 50,
        cursor: 'pointer',
        color: 'white',
        alignItems: 'center',
        height: 'auto'
    }
}))


export default function Search({ placeholder = '', onSearch }) {
    const classes = useStyles()
    const [search, setSearch] = useState('')

    const handleOnClick = useCallback(() => {
        onSearch(search)
    }, [search])

    const handleOnChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [search])

    const handleOnKeyPress = useCallback((e) => {
        if (e.charCode === 13 || e.which === 13 || e.key === 'Enter') {
            handleOnClick()
        }
    }, [search, handleOnClick])

    return (
        <div className={classes.search}>
            <InputBase
                autoFocus={true}
                placeholder={placeholder}
                onChange={handleOnChange}
                onKeyPress={handleOnKeyPress}
                classes={{ root: classes.root, focused: classes.inputFocus }}
                style={{ color: 'white' }}
            />
            <img src={lupa} alt='Search' className={classes.searchIcon} onClick={handleOnClick} />
        </div>
    )
}
