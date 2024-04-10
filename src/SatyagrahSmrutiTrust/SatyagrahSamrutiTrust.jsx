import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton, StyledTab, StyledTabs } from '../StyledMaterialComponents'
import { isMobile } from 'react-device-detect'

import GandhiBapuImg from '../images/Gandhi3.png'
import trusteeImg from '../images/trustee.png'
import spoonImg from '../images/Spoon.png'
import './trust.css'

export default function SatyagrahSamrutiTrust () {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
            {'Satyagrah Smruti Trust'}
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
                    <Typography
                      variant='h4'
                      sx={{
                        // scrollSnapAlign: 'start',
                        fontWeight: 600,
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left'
                      }}
                    >
                      {''}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      In 1990s, through the immense efforts of Shri Bipinbhai
                      Dhirajlal Desai and Shri Gunvantbhai Ishvarlal Desai of
                      Maitri Trust, the government of late shri Chimanbhai Patel
                      had allocated five hectares of land in Bhimrad surrounding
                      the current development site for highlighting the history
                      and importance of Bhimrad during the salt satyagrah.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Multiple resolutions of the trust were also passed to this
                      effect and certain amount had to be submitted to the
                      government for giving effect of the same.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Maitri Trust pledged roughly 15% of the required funds but
                      unfortunately the remaining funds could not be arranged
                      and the idea was lost to the pages of history.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                    <img src={spoonImg} alt='' className='sideimg' />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='2'>
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
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      In 2016, Shri Balwantbhai L. Patel, former Sarpanch of
                      Bhimrad and former corporator of Surat Municipal
                      Corporation, stumbled upon the facts and history of the
                      magnificence of the village and decided to take up the
                      issue again.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      He singlehandedly began a struggle for recognition of
                      Bhimrad that many had assumed to be a lost cause and
                      through tremendous efforts and perseverance brought it to
                      a fruitful conclusion.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      He roped in the assistance of Shri Yogesh Patel and Shri
                      Anil Patel to further research the historical significance
                      and Shri Anilbhai found a treasure trove of newspapers
                      from 1930 all highlighting Bhimrad village.
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Together they reached out to the descendants and family of
                      Shri Bipinbhai Desai and Shri Gunvantbhai Desai, namely,
                      Shri Parimal Gunvantrai Desai and Shri Hardik Parimal
                      Desai with their findings.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      . Shri Parimalbhai and Shri Hardikbhai found out the
                      resolutions passed in 1990 acknowledging the allotment of
                      land by the then government for this historical purpose,
                      and even helped by bringing more Gandhi Family members in
                      active participation of this struggle for recognition.
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
                      volunteers. The choice of such an action was strategic,
                      aiming to engage a broad spectrum of the Indian population
                      in direct, nonviolent resistance.
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Namely, Shri Nilamben Parikh, Shri Kanu Gandhi and Shri
                      Schiva Gandhi were made aware of this struggle for
                      recognition and who played a very important role in
                      raising public awareness through their presence and
                      speeches held at various events in Bhimrad by the Bhimrad
                      Yuva Trust.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Finally, the government of Gujarat, through its Tourism
                      Ministry under the then Tourism Minister Shri Purneshbhai
                      Modi, sanctioned Tourism Corporation of Gujarat Limited to
                      develop the historic sight at a cost of INR 13 Crores on
                      10,000 Sq. Mtrs land and handover its management and
                      functioning to Satyagrah Smruti Trust, formed by Shri
                      Balwantbhai Patel (President) and Shri Parimalbhai Desai
                      (Vice-President) along with 38 other trustees for this
                      specific purpose.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      The project will have a meeting hall, a museum, a prayer
                      hall, a library, an exhibition hall, a research center and
                      a vocation training center.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Both the Salt Satyagrah as well as the Struggle for
                      Recognition of Bhimrad for its role in the Salt Satyagrah,
                      act as a source of great inspiration for the younger
                      generations.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      In the first meeting of the trust, all the trustees
                      unanimously acknowledged the tireless efforts of Shri
                      Balwantbhai Patel, who at times single handedly ran the
                      struggle but never gave up on his mission to develop
                      Bhimrad, and especially the location of the historic
                      events, in the image of the revered and beloved ‘Bapu’
                      Mahatma Gandhiji.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                    <img src={GandhiBapuImg} alt='' className='sideimg' />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='3'>
                {' '}
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    sx={{
                      height: '77vh',
                      overflowY: 'auto',
                      // scrollSnapType: 'y mandatory',
                      '::-webkit-scrollbar': {
                        display: 'none'
                      }
                    }}
                  >
                    <div class='rail-container'>
                      <ul class='rail'>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Balwantbhai L. Patel - <br /> President
                          </span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Parimalbhai G. Desai - <br /> Vice-President</span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Yogeshbhai Patel - <br /> Secretary
                          </span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Karanbhai B. Patel - <br />
                          </span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Hardikbhai P. Desai <br />
                          </span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Prashantbhai B. Patel <br />
                          </span>
                        </li>
                        <li>
                          <img src={trusteeImg} alt='' />
                          <span>
                            Shri Anilbhai Patel <br />
                          </span>
                        </li>
                      </ul>
                    </div>
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
                  <StyledTab label='Struggle for Recognition' value='2' />
                  <StyledTab label='Trust Deed &amp; Trustees' value='3' />
                </StyledTabs>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
