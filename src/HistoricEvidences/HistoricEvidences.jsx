import React from 'react'
import './history.css'

import { Grid, Typography } from '@mui/material'
import { LinkButton } from '../StyledMaterialComponents'

import image1 from '../images/history/image1.png'
import image2 from '../images/history/image2.png'
import image3 from '../images/history/image3.png'
import image4 from '../images/history/image4.png'
import image5 from '../images/history/image5.png'
import image6 from '../images/history/image6.png'
import image7 from '../images/history/image7.png'
import image8 from '../images/history/image8.png'
import image9 from '../images/history/image9.png'
import image10 from '../images/history/image10.png'

export default function HistoricEvidences () {
  return (
    <React.Fragment>
      <Grid container spacing={1} margin={0} width={'100%'}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography
            variant='h3'
            sx={{
              fontFamily: ['Inter', 'sans-serif'].join(','),
              fontWeight: 600,
              textAlign: 'left'
            }}
          >
            Historical Evidence
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <LinkButton onClick={() => (window.location.href = '/')}>
            Back
          </LinkButton>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <div className='slider'>
            <div className='slide-track'>
              {/* historical image slider */}

              <div className='slide'>
                <img src={image1} alt='' />
              </div>
              <div className='slide'>
                <img src={image2} alt='' />
              </div>
              <div className='slide'>
                <img src={image3} alt='' />
              </div>
              <div className='slide'>
                <img src={image4} alt='' />
              </div>
              <div className='slide'>
                <img src={image5} alt='' />
              </div>
              <div className='slide'>
                <img src={image6} alt='' />
              </div>
              <div className='slide'>
                <img src={image7} alt='' />
              </div>
              <div className='slide'>
                <img src={image8} alt='' />
              </div>
              <div className='slide'>
                <img src={image9} alt='' />
              </div>
              <div className='slide'>
                <img src={image10} alt='' />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
