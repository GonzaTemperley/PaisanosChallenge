import React from 'react'
import Modal from '../components/Modal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useHistory } from "react-router-dom"

export default function WorkInProgress() {
    const history = useHistory()

    function handleOnClose() {
        history.push('/')
    }
    return (
        <>
            <Nav />
            <Modal title={'Ups!'} onClose={handleOnClose} content={'We are working on this section. It will be available soon!'} />
            <Footer />
        </>
    )

}