/* eslint-disable */
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
import { t } from 'i18n-js'

export default function SatyagrahSamrutiTrust() {
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
              fontFamily: "var(--main-font-family)",
              textAlign: 'left'
            }}
          >
            {t("Satyagrah_Smruti_Trust")}
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
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left'
                      }}
                    >
                      {''}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para16")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para17")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para18")}
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
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para19")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para20")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para21")}
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para22")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para23")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para24")}
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para25")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para26")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para27")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para28")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para29")}
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
                            Shri Parimalbhai G. Desai - <br /> Vice-President
                          </span>
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
                  <StyledTab label={t("Backdrop")} value='1' />
                  <StyledTab label={t("Struggle_for_Recognition")} value='2' />
                  <StyledTab label={t("Trust_Deed_Trustees")} value='3' />
                </StyledTabs>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
