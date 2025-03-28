/* eslint-disable */
import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { isMobile, isMobileOnly, isTablet } from 'react-device-detect'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton, StyledTab, StyledTabs } from '../StyledMaterialComponents'
import GandhiBapuImg from '../images/Gandhi Bapu Salt Satyagrah.png'
import GandhiBapu2Img from '../images/Gandhi2.png'
import GandhiBapu3Img from '../images/Gandhi3.png'
import './saltsatyagrah.css'
import { t } from 'i18n-js';

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
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    opacity: 0
                  }}
                >
                  {t("Backdrop")}
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: (isMobileOnly || isTablet) ? '40vh' : '75vh' }}>
                <img src={GandhiBapuImg} alt='' className='sideimg' />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  height: (isMobileOnly || isTablet) ? '40vh' : '77vh',
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
                  {t('salt_satyagrah')}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t('the_salt_march_also_known_as_the_dandi_march_was_a_pivotal_event_in_the_indian_independence_movement_against_british_colonial_rule')}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t('orchestrated_by_mohandas_karamchand_gandhi_it_marked_a_significant_escalation_in_the_campaign_of_nonviolent_resistance_and_civil_disobedience_in_india')}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t('the_march_took_place_from_march_12_to_april_6_1930_and_was_a_direct_action_campaign_of_tax_resistance_and_nonviolent_protest_against_the_british_salt_monopoly')}
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
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left'
                  }}
                >
                  {t("salt_satyagrah")}
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: (isMobileOnly || isTablet) ? '40vh' : '75vh' }}>
                <img src={GandhiBapu2Img} alt='' className='sideimg' />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  height: (isMobileOnly || isTablet) ? '40vh' : '77vh',
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
                  {t('Background_to_the_Salt_March')}
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para30")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para31")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para32")}
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left'
                  }}
                >
                  {t('Planning_and_Execution')}
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para33")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para34")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para35")}
                </Typography>

                <Typography
                  variant='h4'
                  sx={{
                    // scrollSnapAlign: 'start',
                    fontWeight: 600,
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left'
                  }}
                >
                  {t('Impact_of_the_March')}
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para36")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para37")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para38")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para39")}
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
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left'
                  }}
                >
                  {t("Role_of_Bhimrad")}
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
              <Grid item xs={12} md={6} lg={6} sx={{ height: (isMobileOnly || isTablet) ? '40vh' : '75vh' }}>
                <img src={GandhiBapu3Img} alt='' className='sideimg' />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  height: (isMobileOnly || isTablet) ? '40vh' : '77vh',
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
                  {t("para40")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para41")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para42")}
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para43")}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "var(--main-font-family)",
                    textAlign: 'left',
                    marginY: 1
                  }}
                >
                  {t("para44")}
                </Typography>
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
              sx={{ justifyContent: 'space-evenly' }}
            >
              <StyledTab label={t("Backdrop")} value='1' />
              <StyledTab label={t("salt_satyagrah")} value='2' />
              <StyledTab label={t("Role_of_Bhimrad")} value='3' />
            </StyledTabs>
          </Box>
        </TabContext>
      </Box>
    </React.Fragment>
  )
}
