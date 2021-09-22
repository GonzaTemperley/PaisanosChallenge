import React, { useState } from "react"

import { makeStyles } from "@material-ui/styles"
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import location from '../svg/location.svg'
import phone from '../svg/phone.svg'
import mailSvg from '../svg/mail.svg'
import row from '../svg/row.svg'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import Modal from '../components/Modal'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '18%',
    display: 'flex',
  },
  newsletters: {
    fontSize: 15,
    marginRight: 56,
    marginTop: '12%',
    letterSpacing: 1
  },
  title: {
    fontSize: 59,
    marginRight: 56,
    letterSpacing: 4
  },
  inputMail: {
    marginTop: '6%'
  },
  containerItems: {
    display: 'flex',
    marginLeft: '20%',
    marginTop: '3%'
  },
  containerItemsGroup: {
    marginLeft: '50%'
  },
  items: {
    marginBottom: '50%',
    minWidth: 93,
    fontWeight: 'lighter',
    cursor: 'pointer'
  },
  containerInfo: {
    display: 'flex',
    marginLeft: '42%',
    marginTop: '3%',
    marginBottom: '5%',
  },
  info: {
    display: 'flex',
    marginLeft: '3%'
  },
  infoText: {
    width: '100%',
    fontSize: 12
  },
  icons: {
    paddingRight: 10
  },
  buttonRow: {
    backgroundColor: '#fed530'
  }
}))

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fed530',
  },
  '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
    color: '#6e6e75'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fed530',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#353535',
    },
    '&:hover fieldset': {
      borderColor: '#fed530',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fed530',
    },
  },
})

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fed530',
  '&:hover': {
    backgroundColor: '#ffcc00',
  },
}))

export default function Nav() {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [mail, setMail] = useState('')

  const handleOnClick = function () {
    setModal(true)
  }
  const handleOnClose = function () {
    setModal(false)
    setMail('')
  }
  const handleOnChange = (e) => {
    setMail(e.value)
  }
  return (
    <div id="Footer">

      {modal === true ? <Modal title={'Congratulations'} content={'you have successfully subscribe to our newsletter!'} onClose={handleOnClose} /> : null}

      <div className={classes.container}>
        <div>
          <div className={classes.title}><b>Paisaflix</b></div>
          <div className={classes.newsletters}><b>Join Newsletters</b></div>
          <div className={classes.inputMail}>
            <CssTextField placeholder="Insert your mail here"
              value={mail}
              onChange={handleOnChange}
              InputProps={{
                endAdornment: <InputAdornment position="end"><ColorButton className={classes.buttonRow} onClick={handleOnClick}><img src={row} alt='row' /></ColorButton></InputAdornment>,
              }}
            /> </div>
        </div>
        <div className={classes.containerItems}>
          <div>
            <div className={classes.items}><b>Product</b></div>
            <div className={classes.items}>Movies</div>
            <div className={classes.items}>TV Show</div>
            <div className={classes.items}>Video</div>
          </div>
          <div className={classes.containerItemsGroup}>
            <div className={classes.items}><b>Media group</b></div>
            <div className={classes.items}>Nice Studio</div>
            <div className={classes.items}>Nice News</div>
            <div className={classes.items}>Nice TV</div>
          </div>
          <div className={classes.containerItemsGroup}>
            <div className={classes.items}><b>Sitemap</b></div>
            <div className={classes.items}>About</div>
            <div className={classes.items}>Careers</div>
            <div className={classes.items}>Press</div>
          </div>
        </div>
      </div>
      <div className={classes.containerInfo}>
        <div className={classes.info}>
          <div className={classes.icons}>
            <img src={location} alt='location' />
          </div>
          <div className={classes.infoText}>
            8819 Enrique Martinez, Bs As., 90280
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.icons}>
            <img src={mailSvg} alt='mail' />
          </div>
          <div className={classes.infoText}>
            hola@paisanos.io
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.icons}>
            <img src={phone} alt='phone' />
          </div>
          <div className={classes.infoText}>
            +271 386-647-3637
          </div>
        </div>
      </div>
    </div>)
}