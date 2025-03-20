/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react'
import './homepage.css'
import saltSatyagrahImg from '../images/saltSatyagrah.svg'
import satyagrahTrustImg from '../images/SatyagrahTrust.svg'
import contactUsImg from '../images/Contactus.svg'
import SocialMediaImg from '../images/SocialMedia.svg'
import HistoricalImg from '../images/HistoricalEvidences.svg'
import FacilitiesImg from '../images/Facilities.svg'

import wholeBGImg from '../images/Whole BG.png'
import logoImg from '../images/Logo (English).png'
import talkbotImg from '../images/Talkbot.svg'

import { isMobile } from 'react-device-detect'

import $ from 'jquery';
import { t } from 'i18n-js';
import LocaleContext from '../i18n/LocaleContext';
import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
// import { I18n } from 'i18n-js'

export default function Homepage() {
  const { changeLocale } = useContext(LocaleContext)

  const [defaultRotarSetting, setDefaultRotarSetting] = useState({
    angle: 0
  })
  const [lang, setLang] = useState('en');

  useEffect(() => {
    animationCall()
  })

  const animationCall = () => {
    $('document').ready(function () {
      //arrange blocks in a circle

      var block = $('#rotator div').get(),
        increase = (Math.PI * 2) / block.length,
        x = 0,
        y = 0,
        angle = 0

      $('#rotator').addClass('rotatoranimation') // rotatoranimation
      for (var i = 0; i < block.length; i++) {
        var elem = block[i]
        x = 195 * Math.cos(angle) + 150
        y = 195 * Math.sin(angle) + 150
        elem.className = 'rotatordivanimation'
        elem.style.position = 'absolute'
        elem.style.left = x + 'px'
        elem.style.top = y + 'px'

        angle += increase;
        setDefaultRotarSetting({
          ...defaultRotarSetting,
          angle: angle
        })
      }
    })
  }


  return (
    <React.Fragment>
      <a href='/'>
        <img alt="satyagrah Smruti Trust" src={logoImg} className='mainlogo' />
      </a>

      {isMobile ? (
        <div className='circle-container'>
          <div className='circle-menu'>
            <ul>
              <li onClick={() => (window.location.href = '/salt-satyagrah')}>
                <a className='spiritual' href='/salt-satyagrah'>
                  <img src={saltSatyagrahImg} alt='' />
                  <span>Salt Satyagrah</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = '/satyagrah-smruti-trust')}>
                <a className='occupational' href='/satyagrah-smruti-trust'>
                  <img src={satyagrahTrustImg} alt='' />
                  <span>Satyagrah Smruti Trust</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = '/contact-us')}>
                <a className='emotional' href='/contact-us'>
                  <img src={contactUsImg} alt='' />
                  <span>Contact Us</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = '/social-media')}>
                <a className='environmental' href='/social-media'>
                  <img src={SocialMediaImg} alt='' />
                  <span>Social Media</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = '/historic-evidences')}>
                <a className='intellectual' href='/historic-evidences'>
                  <img src={HistoricalImg} alt='' />
                  <span>Historical Evidences</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = '/facility-and-attraction')}>
                <a className='social' href='/facility-and-attraction'>
                  <img src={FacilitiesImg} alt='' />
                  <span>Facilities & Attractions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div id='rotator'>
            <div onClick={() => (window.location.href = '/salt-satyagrah')}>
              <img src={saltSatyagrahImg} alt='' />
              <span>Salt Satyagrah</span>
            </div>
            <div onClick={() => (window.location.href = '/satyagrah-smruti-trust')}>
              <img src={satyagrahTrustImg} alt='' />
              <span>Satyagrah Smruti Trust</span>
            </div>
            <div onClick={() => (window.location.href = '/contact-us')}>
              {' '}
              <img src={contactUsImg} alt='' />
              <span>Contact Us</span>
            </div>
            <div onClick={() => (window.location.href = '/social-media')}>
              {' '}
              <img src={SocialMediaImg} alt='' />
              <span>Social Media</span>
            </div>
            <div onClick={() => (window.location.href = '/historic-evidences')}>
              <img src={HistoricalImg} alt='' />
              <span>Historical Evidences</span>
            </div>
            <div onClick={() => (window.location.href = '/facility-and-attraction')}>
              {' '}
              <img src={FacilitiesImg} alt='' />
              <span>Facilities & Attractions</span>
            </div>
          </div>
          <>
            <Grid container spacing={1}>
              <Grid item md={4} lg={4}></Grid>
              <Grid item md={4} lg={4}>
                <FormControl fullWidth>
                  <Select
                    labelId='lang'
                    id='lang'
                    fullWidth
                    defaultValue='-1'
                    value={lang}
                    onChange={e => {
                      changeLocale(e.target.value)
                      setLang(e.target.value);
                    }}
                    IconComponent={ExpandMore}
                  >
                    <MenuItem key='-1' value='-1' disabled>
                      <strong
                        style={{ color: '#303030' }}
                      >
                        <em>{t('select_lang')}</em>
                      </strong>
                    </MenuItem>
                    <MenuItem
                      value={'en'}
                      sx={{
                        fontWeight: 500,
                        color: '#303030',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          color: '#303030',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          overflow: 'hidden'
                        }}
                      >
                        {t('english')}
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      value={'gu'}
                      sx={{
                        fontWeight: 500,
                        color: '#303030',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          color: '#303030',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          overflow: 'hidden'
                        }}
                      >
                        {t('gujarati')}
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      value={'hn'}
                      sx={{
                        fontWeight: 500,
                        color: '#303030',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          color: '#303030',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          overflow: 'hidden'
                        }}
                      >
                        {t('hindi')}
                      </Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={4} lg={4}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 500,
                    color: '#303030',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    overflow: 'hidden'
                  }}
                >
                  {t('name')}
                </Typography>
              </Grid>
            </Grid>
          </>
        </>
      )}

      <img src={wholeBGImg} alt='' className='wholebg' />

      <a className='talkbot-container' href='/bot'>
        <img src={talkbotImg} alt='' />
        <span>Talk with Bapu</span>
      </a>
    </React.Fragment>
  )
}
