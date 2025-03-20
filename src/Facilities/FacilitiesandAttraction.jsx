import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton, StyledTab, StyledTabs } from '../StyledMaterialComponents'
import { isMobile } from 'react-device-detect'

import galleryImg from '../images/Gallery.png'
import sabhagruhImg from '../images/Sabhagruh.png'
import auditoriumImg from '../images/Auditorium.png'
import technologyCenterImg from '../images/5G center.png'

export default function FacilitiesandAttraction () {
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
            {'Facilities and attraction'}
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
                    sx={{ height: !isMobile ? '75vh' : 'auto' }}
                  >
                    <img src={galleryImg} alt='' className='sideimg' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: !isMobile ? '77vh' : '40vh',
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
                      The gallery begins with a chronological narrative of
                      Gandhi's life, tracing his humble beginnings in Porbandar,
                      Gujarat, to his formative years in South Africa, where he
                      first developed the principles of Satyagraha (truth-force)
                      and Ahimsa (nonviolence) in response to racial
                      discrimination.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Photographs, documents, and personal artifacts paint a
                      vivid picture of Gandhi's early influences and
                      experiences, illuminating the evolution of his philosophy
                      of resistance and resilience.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Central to the exhibit is Gandhi's pivotal role in India's
                      struggle for independence from British colonial rule.
                      Visitors encounter iconic images of Gandhi leading mass
                      protests, such as the Salt March of 1930, and engaging in
                      acts of civil disobedience, symbolized by the spinning
                      wheel, emblematic of self-reliance and economic
                      empowerment.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Letters, speeches, and newspaper clippings capture the
                      fervor of the Indian independence movement and Gandhi's
                      unwavering commitment to nonviolent resistance in the face
                      of adversity.
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
                      height: !isMobile ? '77vh' : '40vh',
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
                      As visitors enter the hall, they are enveloped by an aura
                      of peace and enlightenment, reminiscent of the principles
                      espoused by the great leader himself. This exhibit serves
                      not only as a homage to Gandhi's life and legacy but also
                      as a testament to the enduring power of nonviolent
                      resistance.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      The centerpiece of the exhibit is a life-size replica of
                      Mahatma Gandhi, adorned in his signature attire of a
                      simple loincloth and shawl. His peaceful countenance seems
                      to radiate wisdom and compassion, inviting visitors to
                      contemplate the profound impact of his teachings.
                      Surrounding the figure are panels depicting key moments
                      from Gandhi's life, each accompanied by insightful
                      commentary and archival photographs.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      A particularly poignant section of the exhibit is
                      dedicated to Gandhi's Salt March of 1930, a defining
                      moment in India's quest for independence.
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Through multimedia installations and interactive displays,
                      visitors can trace Gandhi's footsteps along the historic
                      march, experiencing the courage and resilience of those
                      who walked alongside him in defiance of unjust laws.
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ height: !isMobile ? '75vh' : 'auto' }}
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
                    sx={{ height: !isMobile ? '75vh' : 'auto' }}
                  >
                    <img src={auditoriumImg} alt='' className='sideimg' />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                      height: !isMobile ? '77vh' : '40vh',
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
                      The Gandhi Auditorium hosts a variety of events, all
                      curated to foster dialogue, education, and community
                      engagement.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Lectures, debates, and seminars on topics ranging from
                      peace, ethics, and human rights to environmental
                      sustainability and social justice are regular occurrences.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      Performances and cultural events highlighting traditional
                      arts and promoting unity among diverse communities also
                      find a stage here.
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
                      height: !isMobile ? '77vh' : '40vh',
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
                      The center focuses on developing technologies that serve
                      humanity, emphasizing solutions for clean energy,
                      sustainable agriculture, healthcare, and education,
                      especially for underserved communities.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      This approach mirrors Gandhi's dedication to uplifting the
                      poorest of poor "અંત્યોદય" (The doctarine of Antyoday) and most marginalized sections of society,
                      ensuring that the benefits of appropriate technology reach everyone.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      In a world grappling with the ethical implications of
                      artificial intelligence, the Gandhian Technology Center
                      prioritizes the development of AI that embodies principles
                      of non-violence and beneficence.
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: ['Inter', 'sans-serif'].join(','),
                        textAlign: 'left',
                        marginY: 1
                      }}
                    >
                      It fosters AI research committed to transparency, privacy,
                      and the welfare of all beings, drawing on Gandhi's
                      teachings on truth and ethics.
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{ height: !isMobile ? '75vh' : 'auto' }}
                  >
                    <img src={technologyCenterImg} alt='' className='sideimg' />
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
                  <StyledTab label='Galleries' value='1' />
                  <StyledTab label='Sabhagruh' value='2' />
                  <StyledTab label='Auditorium' value='3' />
                  <StyledTab label='Technology Center' value='4' />
                </StyledTabs>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
