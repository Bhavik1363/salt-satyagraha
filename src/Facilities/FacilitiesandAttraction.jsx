import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton, StyledTab, StyledTabs } from '../StyledMaterialComponents'
import { isMobileOnly } from 'react-device-detect'

import galleryImg from '../images/Gallery.png'
import sabhagruhImg from '../images/Sabhagruh.png'
import auditoriumImg from '../images/Auditorium.png'
import technologyCenterImg from '../images/5G center.png'
import { t } from 'i18n-js'

export default function FacilitiesandAttraction() {
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
            variant='h4'
            sx={{
              fontFamily: "var(--main-font-family)",
              textAlign: 'left'
            }}
          >
            {t("Facilities_and_attraction")}
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
                    sx={{ height: !isMobileOnly ? '75vh' : '35vh' }}
                  >
                    <img src={galleryImg} alt='' className='sideimg' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: !isMobileOnly ? '77vh' : '30vh',
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
                      {t("para1")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para2")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para3")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para4")}
                    </Typography>
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
                      height: !isMobileOnly ? '77vh' : '35vh',
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
                      {t("para5")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para6")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para7")}
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para8")}
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ height: !isMobileOnly ? '75vh' : '35vh' }}
                  >
                    <img src={sabhagruhImg} alt='' className='sideimg' />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='3'>
                {' '}
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ height: !isMobileOnly ? '75vh' : '35vh' }}
                  >
                    <img src={auditoriumImg} alt='' className='sideimg' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: !isMobileOnly ? '77vh' : '35vh',
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
                      {t("para9")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t('para10')}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para11")}
                    </Typography>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value='4'>
                {' '}
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: !isMobileOnly ? '77vh' : '35vh',
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
                      {t("para12")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para13")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para14")}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "var(--main-font-family)",
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      {t("para15")}
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ height: !isMobileOnly ? '75vh' : '35vh' }}
                  >
                    <img src={technologyCenterImg} alt='' className='sideimg' />
                  </Grid>
                </Grid>
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
                  <StyledTab label={t("Galleries")} value='1' />
                  <StyledTab label={t("Sabhagruh")} value='2' />
                  <StyledTab label={t("Auditorium")} value='3' />
                  <StyledTab label={t("Technology_Center")} value='4' />
                </StyledTabs>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
