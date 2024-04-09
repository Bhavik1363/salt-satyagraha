import React, { useState } from 'react'
import { Box, Grid, Typography, FormControl, InputLabel } from '@mui/material'
import {
  CssTextField,
  FilledButton,
  LinkButton,
  RedditTextField
} from '../StyledMaterialComponents'

import bhimradImg from '../images/bhimrad.png'

export default function Contactus () {
  const [userObj, setUserObj] = useState({
    name: '',
    mobileNo: '',
    email: '',
    details: ''
  })

  const handleChangeValue = e => {
    const { name, value } = e.target

    setUserObj({
      ...userObj,
      [name]: value
    })
  }

  const handleSubmitData = () => {
    console.log('userObj', userObj)
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{ width: '100%', margin: 0, paddingRight: 2 }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: ['Inter', 'sans-serif'].join(','),
              textAlign: 'left'
            }}
          >
            {'Contact us'}
          </Typography>

          <LinkButton onClick={() => (window.location.href = '/')}>
            Back
          </LinkButton>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <img src={bhimradImg} alt='' />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Grid container spacing={1} width={'100%'} margin={0}>
            <Grid item xs={12} md={12} lg={12}>
              <RedditTextField
                label='Name'
                id='reddit-input'
                variant='filled'
                type='text'
                name='name'
                value={userObj.name}
                onChange={handleChangeValue}
                style={{ marginTop: 11 }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <RedditTextField
                label='Email'
                id='reddit-input'
                variant='filled'
                type='email'
                name='email'
                value={userObj.email}
                onChange={handleChangeValue}
                style={{ marginTop: 11 }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <RedditTextField
                label='Mobile Number'
                id='reddit-input'
                variant='filled'
                type='number'
                name='mobileNo'
                value={userObj.mobileNo}
                onChange={handleChangeValue}
                style={{ marginTop: 11 }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <RedditTextField
                label='Message'
                id='reddit-input'
                variant='filled'
                type='text'
                name='details'
                value={userObj.details}
                onChange={handleChangeValue}
                multiline
                rows={3}
                style={{ marginTop: 11 }}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <FilledButton onClick={handleSubmitData}>Send</FilledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
