/* eslint-disable */
import React from 'react'
import './history.css'

import { Grid, Typography } from '@mui/material'
import { LinkButton } from '../StyledMaterialComponents'
import Slider from 'react-slick'

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

const imageObj = {
  img1: image1,
  img2: image2,
  img3: image3,
  img4: image4,
  img5: image5,
  img6: image6,
  img7: image7,
  img8: image8,
  img9: image9,
  img10: image10
}

const settings = {
  customPaging: function (i) {
    return (
      <div className='customarrow'>
        <img src={imageObj[`img${i + 1}`]} alt='' />
      </div>
    )
  },
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear'
}

export default function HistoricEvidences() {
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

        <Grid item xs={12} md={12} lg={12} sx={{ height: '80vh' }}>
          {/* <div className='slider'>
            <div className='slide-track'>
              

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
          </div> */}

          <div className='slider-container'>
            <Slider {...settings}>
              <div className='slider-secondiv'>
                <img src={image1} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image2} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image3} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image4} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image5} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image6} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image7} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image8} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image9} alt='' />
                <h3></h3>
              </div>
              <div className='slider-secondiv'>
                <img src={image10} alt='' />
                <h3></h3>
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
