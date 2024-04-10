/* eslint-disable */
import React from 'react'
import './social.css'

import wholeBGImg from '../images/Whole BG.png'
import { Grid, Typography } from '@mui/material'

import fbQRImg from '../images/social-media/fbi_qr-code.png'
import instaQRImg from '../images/social-media/insta_qrcode.png'
import xQRImg from '../images/social-media/x_qr-code.png'
import { LinkButton } from '../StyledMaterialComponents'

export default function SocialMedia() {
  return (
    <React.Fragment>
      <img src={wholeBGImg} alt='' className='wholebgsecond' />
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
            {'Satyagrah Smruti Trust'}
          </Typography>

          <LinkButton onClick={() => (window.location.href = '/')}>
            Back
          </LinkButton>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'55vh'}
        >
          <ul className='social-container'>
            <li>
              <img src={fbQRImg} alt='' />
              <span>Facebook</span>
            </li>
            <li>
              <img src={instaQRImg} alt='' />
              <span>Instagram</span>
            </li>
            <li>
              <img src={xQRImg} alt='' />
              <span>X (Twitter)</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
