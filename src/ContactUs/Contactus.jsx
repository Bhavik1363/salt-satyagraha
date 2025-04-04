/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import {
  FilledButton,
  LinkButton,
  RedditTextField,
  StyledTab,
  StyledTabs
} from '../StyledMaterialComponents'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { isMobile, isMobileOnly } from 'react-device-detect'
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import sst_location from '../images/location/sst_location.webp';

import bhimradImg from '../images/bhimrad.png'
import './contact.css'

// slider images
import slider1Img from '../images/nearby places/01.jpg'
import slider2Img from '../images/nearby places/02.jpg'
import slider3Img from '../images/nearby places/03.jpg'
import slider4Img from '../images/nearby places/04.jpg'
import slider5Img from '../images/nearby places/05.jpg'
import slider6Img from '../images/nearby places/06.jpg'
import slider7Img from '../images/nearby places/07.jpg'
import slider8Img from '../images/nearby places/08.jpg'
import slider9Img from '../images/nearby places/09.jpg'
import axios from 'axios'
import baseUrls from '../base-urls'
import { t } from 'i18n-js';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const imageObj = {
  img1: slider1Img,
  img2: slider2Img,
  img3: slider3Img,
  img4: slider4Img,
  img5: slider5Img,
  img6: slider6Img,
  img7: slider7Img,
  img8: slider8Img,
  img9: slider9Img
}

const NextButton = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <ArrowForwardIos />
    </IconButton>
  )
}

const PrevButton = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <ArrowBackIos />
    </IconButton>
  )
}

const settings = {
  customPaging: function (i) {
    return (
      <div className='customarrow'>
        <img src={imageObj[`img${i + 1}`]} alt='' />
      </div>
    )
  },
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  arrows: true,
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  // nextArrow: <NextButton />,
  // prevArrow: <PrevButton />,
  // autoplaySpeed: 3000,
  cssEase: 'linear',
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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

  useEffect(() => {
    if (value == '3') {
      var iframe = document.getElementById('google-map');
      var placeholder = document.getElementById('map-placeholder');

      setTimeout(function () {
        console.log('Loading Google Map...');
        iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.7993225216062!2d72.7988057!3d21.1285616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05300319262df%3A0xd4be8a5aabb0f730!2sGandhi%20Auditorium!5e0!3m2!1sen!2sin!4v1716741828484!5m2!1sen!2sin";

        // Wait for the iframe to fully load before showing it
        iframe.onload = function () {
          console.log('Google Map loaded!');
          iframe.style.display = 'block';  // Show the map
          placeholder.style.display = 'none'; // Hide placeholder
        };
      }, 150);
    }
  }, [value])

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
            variant={isMobileOnly ? 'h6' : 'h4'}
            sx={{
              fontFamily: "var(--main-font-family)",
              textAlign: 'left',
              fontWeight: 600
            }}
          >
            {t('Contact_US')}
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
                  <Grid item xs={12} md={6} lg={6} sx={{ height: isMobileOnly ? '35vh' : '75vh' }}>
                    <img src={bhimradImg} alt='' className='sideimg' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: isMobileOnly ? '35vh' : '77vh',
                      overflowY: 'auto',
                      // scrollSnapType: 'y mandatory',
                      '::-webkit-scrollbar': {
                        display: 'none'
                      }
                    }}
                  >
                    <Grid container spacing={1} width={'100%'} margin={0}>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant='body1'
                          sx={{
                            fontFamily: "var(--main-font-family)",
                            textAlign: 'left'
                          }}
                        >
                          {t('For_any_constructive_project/_programs_kindly_contact')}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <RedditTextField
                          label={t('Name')}
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
                          label={t('Email')}
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
                          label={t('Mobile_Number')}
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
                          label={t('Message')}
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
                          {t('Send')}
                        </FilledButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='2' sx={{ height: '68vh' }}>
                <div className='slider-container'>
                  <Slider {...settings}>
                    <div className='slider-maindiv'>
                      <img src={slider1Img} alt='' />
                      <h3>{t("Surat_Castle")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider2Img} alt='' />
                      <h3>{t("Dumas_beach")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider3Img} alt='' />
                      <h3>{t("VR_SURAT")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider4Img} alt='' />
                      <h3>{t("Tapi_Riverfront")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider5Img} alt='' />
                      <h3>{t("Gopi_Talav")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider6Img} alt='' />
                      <h3>{t("Dream_city")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider7Img} alt='' />
                      <h3>{t("Suvali_beach")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider8Img} alt='' />
                      <h3>{t("Revolving_Restaurant")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider9Img} alt='' />
                      <h3>{t("Textile_Market")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider9Img} alt='' />
                      <h3>{t("Textile_Market")}</h3>
                    </div>
                  </Slider>
                </div>
              </TabPanel>

              <TabPanel value='3' sx={{ height: '68vh' }}>
                <div id="map-container" style={{ position: "relative", width: "100%", height: "100%" }}>
                  <img id="map-placeholder"
                    src={sst_location}
                    alt="Google Map Placeholder"
                    style={{ width: "100%", height: "100%", objectFit: 'contain', position: "absolute", top: 0, left: 0, zIndex: 1, }} />

                  <iframe
                    id="google-map"
                    style={{ border: 0, display: "none", width: '100%', height: "100%" }}
                  ></iframe>
                </div>
              </TabPanel>

              <TabPanel value='4' sx={{ height: '70vh' }}>
                <div className='slider-container'>
                  <Slider {...settings}>
                    <div className='slider-maindiv'>
                      <img src={slider1Img} alt='' />
                      <h3>{t("Hotel_Executive")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider2Img} alt='' />
                      <h3>{t("Luxurious_Studio_Apartment_at_Rajhans_Belliza")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider3Img} alt='' />
                      <h3>{t("Hotel_Royal_Accord")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider4Img} alt='' />
                      <h3>{t("Weekend_Address")}</h3>
                    </div>
                    <div className='slider-maindiv'>
                      <img src={slider5Img} alt='' />
                      <h3>{t("Rajhans_Belliza_Luxurious_Homes")}</h3>
                    </div>
                  </Slider>
                </div>
              </TabPanel>

              <Box
                sx={{
                  position: isMobileOnly ? 'fixed' : 'absolute',
                  bottom: isMobileOnly ? 0 : 8,
                  width: '100%',
                  background: '#ffffff'
                }}
              >
                <StyledTabs
                  onChange={handleChange}
                  centered
                  variant={isMobileOnly && "fullWidth"}
                  sx={{ justifyContent: 'space-evenly' }}
                >
                  <StyledTab label={t("Contact_US")} value='1' />
                  <StyledTab label={t("Near_by_places")} value='2' />
                  <StyledTab label={t("How_to_reach")} value='3' />
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
