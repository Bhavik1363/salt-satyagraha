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
import { Box, FormControl, Grid, IconButton, Menu, MenuItem, Select, Typography } from '@mui/material'
import { ExpandMore, Translate } from '@mui/icons-material'
// import { I18n } from 'i18n-js'

export default function Homepage() {
  const { changeLocale } = useContext(LocaleContext)

  const [defaultRotarSetting, setDefaultRotarSetting] = useState({
    angle: 0
  })
  const [lang, setLang] = useState('en');
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleLanguageChange = (code) => {
    changeLocale(code);
    setLang(code);
    localStorage.setItem("lang", code); // Store language preference
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <a href='/'>
        <img alt="satyagrah Smruti Trust" src={logoImg} className='mainlogo' />
      </a>

      <Box
        sx={{
          position: "absolute",
          right: 150,
          top: 20,
        }}
      >
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <Translate />
        </IconButton>

        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)} // Close the menu when clicking outside
        >
          <MenuItem key="-1" value="-1" disabled>
            <strong style={{ color: "#303030" }}>
              <em>{t("select_lang")}</em>
            </strong>
          </MenuItem>
          {[
            { code: "en", label: t("english") },
            { code: "gu", label: t("gujarati") },
            { code: "hn", label: t("hindi") },
          ].map(({ code, label }) => (
            <MenuItem
              key={code}
              value={code}
              sx={{
                fontWeight: 500,
                color: "#303030",
                textOverflow: "ellipsis",
                width: "100%",
                overflow: "hidden",
              }}
              onClick={() => handleLanguageChange(code)}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: "#303030",
                  textOverflow: "ellipsis",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>


      {/* <Box
        sx={{
          position: "absolute",
          right: 150,
          top: 20,
        }}
      >
      

        <Select
          labelId='lang'
          id='lang'
          // fullWidth
          defaultValue='-1'
          value={lang}
          onChange={e => {
            changeLocale(e.target.value)
            setLang(e.target.value);
            localStorage.setItem("lang", e.target.value)
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
      </Box> */}

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

        <div id='rotator'>
          <div onClick={() => (window.location.href = '/salt-satyagrah')}>
            <img src={saltSatyagrahImg} alt='' />
            <span>{t('salt_satyagrah')}</span>
          </div>
          <div onClick={() => (window.location.href = '/satyagrah-smruti-trust')}>
            <img src={satyagrahTrustImg} alt='' />
            <span>{t('satyagrah_smruti_trust')}</span>
          </div>
          <div onClick={() => (window.location.href = '/contact-us')}>
            {' '}
            <img src={contactUsImg} alt='' />
            <span>{t('contact_us')}</span>
          </div>
          <div onClick={() => (window.location.href = '/social-media')}>
            {' '}
            <img src={SocialMediaImg} alt='' />
            <span>{t('social_media')}</span>
          </div>
          <div onClick={() => (window.location.href = '/historic-evidences')}>
            <img src={HistoricalImg} alt='' />
            <span>{t('historical_evidences')}</span>
          </div>
          <div onClick={() => (window.location.href = '/facility-and-attraction')}>
            {' '}
            <img src={FacilitiesImg} alt='' />
            <span>{t('facilities_attractions')}</span>
          </div>
        </div>


      )}

      <img src={wholeBGImg} alt='' className='wholebg' />

      <a className='talkbot-container' href='/bot'>
        <img src={talkbotImg} alt='' />
        <span>Talk with Bapu</span>
      </a>
    </React.Fragment>
  )
}
