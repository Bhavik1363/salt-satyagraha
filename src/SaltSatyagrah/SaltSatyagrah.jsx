/* eslint-disable */
import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton, StyledTab, StyledTabs } from '../StyledMaterialComponents'
import GandhiBapuImg from '../images/Gandhi Bapu Salt Satyagrah.png'
import GandhiBapu2Img from '../images/Gandhi2.png'
import GandhiBapu3Img from '../images/Gandhi3.png'
import './saltsatyagrah.css'

export default function SaltSatyagrah() {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} sx={{ minHeight: 35 }}>
          <TabPanel value='1'>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} lg={6}>
                <Typography
                  variant='h3'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    opacity: 0
                  }}
                >
                  {'Backdrop'}
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                <img src={GandhiBapuImg} alt='' className='sideimg' />
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
                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Salt Satyagrah
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The Salt March, also known as the Dandi March, was a pivotal
                  event in the Indian independence movement against British
                  colonial rule.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  Orchestrated by Mohandas Karamchand Gandhi, it marked a
                  significant escalation in the campaign of nonviolent
                  resistance and civil disobedience in India.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The march took place from March 12 to April 6, 1930, and was a
                  direct action campaign of tax resistance and nonviolent
                  protest against the British salt monopoly.
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='2'>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} lg={6}>
                <Typography
                  variant='h3'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Salt Satyagrah
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                <img src={GandhiBapu2Img} alt='' className='sideimg' />
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
                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Background to the Salt March
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The British Salt Acts prohibited Indians from collecting or
                  selling salt, a staple in the Indian diet. Everyone in India,
                  regardless of caste, religion, or ethnicity, needed salt.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  By monopolizing its control, including the imposition of a
                  salt tax, the British exerted a significant economic and
                  symbolic grip on the Indian populace.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  This policy not only exploited India's natural resources but
                  also deeply affected the daily lives of its citizens, making
                  salt an ideal focus for Gandhi's protest.
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Planning and Execution
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  Gandhi carefully planned the Salt March to maximize its
                  impact. He chose to march from his ashram in Sabarmati,
                  Ahmedabad, to the coastal village of Dandi in the Indian state
                  of Gujarat.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The march covered a distance of approximately 240 miles (385
                  kilometers) and lasted 24 days.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  Gandhi, then 61 years old, was accompanied by 78 trusted
                  volunteers. The choice of such an action was strategic, aiming
                  to engage a broad spectrum of the Indian population in direct,
                  nonviolent resistance.
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Impact of the March
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  As Gandhi and his followers proceeded on their journey, they
                  addressed large crowds, urging an end to British control over
                  salt. The march received extensive press coverage, both in
                  India and internationally, drawing global attention to the
                  Indian independence movement and the injustices of British
                  colonial rule.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  Upon reaching Dandi on April 6, Gandhi ceremonially violated
                  the salt laws by making salt from seawater. This act inspired
                  a nationwide movement in which millions of Indians defied the
                  salt laws, producing salt themselves or engaging in other
                  forms of civil disobedience and protest against British
                  authorities.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The Salt March had several immediate consequences. It led to
                  the arrest of thousands of Indians, including Gandhi himself.
                  It failed to bring any immediate concessions from the British
                  government. However, the march significantly bolstered Indian
                  nationalistic sentiments, proving the effectiveness of
                  nonviolent resistance and civil disobedience as tools against
                  colonial rule. It also marked a crucial step towards the
                  eventual dismantling of the British Empire in India.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The Salt March remains a symbol of resistance and civil
                  disobedience, illustrating the power of peaceful protest and
                  the significant impact such actions can have on political
                  movements around the world. It is celebrated as a key event in
                  the history of India's struggle for independence, showcasing
                  Gandhi's leadership and the indomitable spirit of the Indian
                  people in their fight against oppression.
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='3'>
            {' '}
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} lg={6}>
                <Typography
                  variant='h3'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left'
                  }}
                >
                  Role of Bhimrad
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                <img src={GandhiBapu3Img} alt='' className='sideimg' />
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
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  Bhimrad, a village in the Surat district of Gujarat, India,
                  became a notable waypoint during the historic Salt March led
                  by Mahatma Gandhi in 1930. While the march itself covered a
                  significant stretch from Sabarmati Ashram in Ahmedabad to
                  Dandi on the Gujarat coast, Bhimrad, played a pivotal role in
                  India's independence movement.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  A crowd of an estimated 30,000 volunteers (estimates vary
                  between 10,000 – 30,000) had gathered for this meeting in
                  Bhimrad, Surat. Gandhiji had uttered the words during this
                  gathering that ‘For the first time I am able to forsee the
                  independence of India in the resolve and numbers of the people
                  gathered here today’. On April 6<sup>th</sup>, 1930 gandhiji broke the salt law.
                  On the same day, Ramdas Gandhi broke the salt law in Bhimrad and caught imprisonment.
                  Gandhi ji therefore sent another son Manilal to continue the satyagrah at Bhimrad.
                  Thus two members of gandhi family led the salt satyagrah simontaneously with Dandi and Bhimrad and caught imprisonment.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The march through Bhimrad symbolized a direct challenge to
                  British authority and was instrumental in raising awareness
                  and support for the independence movement among the rural
                  populations of Gujarat and beyond. The participation and
                  support of rural communities were vital to the nationalistic
                  cause and helped to broaden the base of the independence
                  movement, making it a mass movement that cut across regional,
                  cultural, and socio-economic lines.
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  The famous photograph of Gandhiji picking the ‘Pinch of Salt’
                  or ‘Chapti Mithu’ were taken in Bhimrad which became widely
                  popular and a symbol of the movement, was taken at Bhimrad and
                  Gandhiji addressed the large gathering gathered there to
                  witness the historic moment. Bhimrad was also the ideal
                  location for international press and tourists arriving from
                  various countries to rest, rejuvenate and extensively cover
                  the movement. Satyagrah Smruti Trust has documented over 150
                  international newspapers that covered the events in Bhimrad in
                  1930.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  In such regards, Bhimrad was one of the most important and
                  influential locations for the Salt Satyagrah movement that
                  shook the foundations of the British Empire in India.
                </Typography>
              </Grid>
            </Grid>
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
              <StyledTab label='Backdrop' value='1' />
              <StyledTab label='Salt Satyagrah' value='2' />
              <StyledTab label='Role of Bhimrad' value='3' />
            </StyledTabs>
          </Box>
        </TabContext>
      </Box>
    </React.Fragment>
  )
}
