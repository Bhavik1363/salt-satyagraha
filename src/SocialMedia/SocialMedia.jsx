/* eslint-disable */
import React from 'react'
import './social.css'

import wholeBGImg from '../images/Whole BG.png'
import { Grid, Typography } from '@mui/material'

import fbQRImg from '../images/social-media/facebookQR.svg'
import instaQRImg from '../images/social-media/insta_qrcode.png'
import xQRImg from '../images/social-media/xQR.svg'
import { LinkButton } from '../StyledMaterialComponents'
import { t } from 'i18n-js';
import { isMobileOnly } from 'react-device-detect'

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
            variant={isMobileOnly ? 'h6' : 'h4'}
            sx={{
              fontFamily: "var(--main-font-family)",
              textAlign: 'left',
              fontWeight: 600,
            }}
          >
            {t("Satyagrah_Smruti_Trust")}
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
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          height={'55vh'}
        >
          <ul className='social-container'>
            <li>
              <img src={fbQRImg} alt='' style={isMobileOnly && {width: "150px"}} />
              <span style={{cursor: 'pointer'}} onClick={() => window.open('https://www.facebook.com/profile.php?id=61559225883216', 'blank')}>Facebook</span>
            </li>
            <li>
              <img src={xQRImg} alt='' style={isMobileOnly && {width: "150px"}} />
              <span style={{cursor: 'pointer'}} onClick={() => window.open('https://x.com/sstbhimrad', 'blank')}>X (Twitter)</span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
