/* eslint-disable */
import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
  FilledButton,
  LinkButton,
  RedditTextField,
  StyledTab,
  StyledTabs
} from '../StyledMaterialComponents'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { isMobile } from 'react-device-detect'
import Slider from 'react-slick'

import bhimradImg from '../images/bhimrad.png'
import './contact.css'

// slider images
import slider1Img from '../images/nearby places/01.jpg'
import slider2Img from '../images/nearby places/02.jpg'
import slider3Img from '../images/nearby places/03.jpg'
import slider4Img from '../images/nearby places/04.jpg'
import slider5Img from '../images/nearby places/05.jpg'
import axios from 'axios'
import baseUrls from '../base-urls'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear'
}

export default function Contactus() {
  const [userObj, setUserObj] = useState({
    name: '',
    mobileNo: '',
    email: '',
    details: ''
  })
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeValue = e => {
    const { name, value } = e.target

    setUserObj({
      ...userObj,
      [name]: value
    })
  }

  const handleSubmitData = () => {
    const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/
    if (userObj.name === '') {
      alert('Please enter a name');
    } else if (userObj.email === '') {
      alert('Please enter a email');
    } else if (!mailPattern.test(userObj.email)) {
      alert('Please enter a valid email');
    } else if (userObj.mobileNo === '') {
      alert('Please enter a mobile number');
    } else if (userObj.mobileNo.length !== 10) {
      alert('Please enter a valid mobile number');
    } else if (userObj.details === '') {
      alert('Please enter a message');
    } else {
      axios
        .post(`${baseUrls.serverUrl}sendMail/sst`, {
          senderName: 'SSTBhimrad',
          userName: userObj.name,
          userEmail: userObj.email,
          userNumber: userObj.mobileNo,
          userMsg: userObj.details,
        }).then(() => {
          alert('We have successfully received your inquiry');
          setUserObj({
            name: '',
            mobileNo: '',
            email: '',
            details: ''
          })
        }).catch((err) => {
          alert('An error occurred while sending the inquiry');
        });
    }
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

        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value} sx={{ minHeight: 35 }}>
              <TabPanel value='1'>
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: '77vh',
                      overflowY: 'auto',
                      // scrollSnapType: 'y mandatory',
                      '::-webkit-scrollbar': {
                        display: 'none'
                      }
                    }}
                  >
                    <img src={bhimradImg} alt='' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: '77vh',
                      overflowY: 'auto',
                      // scrollSnapType: 'y mandatory',
                      '::-webkit-scrollbar': {
                        display: 'none'
                      }
                    }}
                  >
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
                        <FilledButton onClick={handleSubmitData}>
                          Send
                        </FilledButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='2' sx={{ height: '70vh' }}>
                <div className='slider-container'>
                  <Slider {...settings}>
                    <div className='slider-maindiv'>
                      <img src={slider1Img} alt='' />
                      <h3>Surat Castle</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider2Img} alt='' />
                      <h3>Dumas beach</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider3Img} alt='' />
                      <h3>VR SURAT</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider4Img} alt='' />
                      <h3>Tapi Riverfront</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider5Img} alt='' />
                      <h3>Gopi Talav</h3>
                    </div>
                  </Slider>
                </div>
              </TabPanel>

              <TabPanel value='3' sx={{ height: '70vh' }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.7993225216062!2d72.7988057!3d21.1285616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05300319262df%3A0xd4be8a5aabb0f730!2sGandhi%20Auditorium!5e0!3m2!1sen!2sin!4v1716741828484!5m2!1sen!2sin'
                  width='600'
                  height='450'
                  style={{ border: 0, height: '100%', width: '90%' }}
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              </TabPanel>

              <TabPanel value='4' sx={{ height: '70vh' }}>
                <div className='slider-container'>
                  <Slider {...settings}>
                    <div className='slider-maindiv'>
                      <img src={slider1Img} alt='' />
                      <h3>Hotel Executive</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider2Img} alt='' />
                      <h3>Luxurious Studio Apartment at Rajhans Belliza</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider3Img} alt='' />
                      <h3>Hotel Royal Accord</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider4Img} alt='' />
                      <h3>Weekend Address</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider5Img} alt='' />
                      <h3>Rajhans Belliza Luxurious Homes</h3>
                    </div>
                  </Slider>
                </div>
              </TabPanel>

              <Box
                sx={{
                  position: isMobile ? 'fixed' : 'absolute',
                  bottom: isMobile ? 0 : 8,
                  width: '100%',
                  background: '#ffffff'
                }}
              >
                <StyledTabs
                  onChange={handleChange}
                  centered
                  sx={{ justifyContent: 'space-evenly' }}
                >
                  <StyledTab label='Contact us' value='1' />
                  <StyledTab label='Near by places' value='2' />
                  <StyledTab label='How to reach' value='3' />
                  {/* <StyledTab label='Accomodation' value='4' /> */}
                </StyledTabs>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
