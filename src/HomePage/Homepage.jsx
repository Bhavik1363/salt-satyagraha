/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
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

import $ from 'jquery'

export default function Homepage () {
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

        angle += increase
      }
    })
  }

  return (
    <React.Fragment>
      <img alt='' src={logoImg} className='mainlogo' />

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

              <li>
                <a className='occupational' href='#'>
                  <img src={satyagrahTrustImg} alt='' />
                  <span>Satyagrah Smruti Trust</span>
                </a>
              </li>

              <li>
                <a className='emotional' href='#'>
                  <img src={contactUsImg} alt='' />
                  <span>Contact Us</span>
                </a>
              </li>

              <li>
                <a className='environmental' href='#'>
                  <img src={SocialMediaImg} alt='' />
                  <span>Social Media</span>
                </a>
              </li>

              <li onClick={() => (window.location.href = 'historic-evidences')}>
                <a className='intellectual' href='#'>
                  <img src={HistoricalImg} alt='' />
                  <span>Historical Evidences</span>
                </a>
              </li>

              <li>
                <a className='social' href='#'>
                  <img src={FacilitiesImg} alt='' />
                  <span>Facilities & Attractions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          id='rotator'
          onMouseEnter={() => {
            $('#rotator').removeClass('rotatoranimation')
            var block = $('#rotator div').get()

            for (var i = 0; i < block.length; i++) {
              var elem = block[i]

              elem.className = ''
            }
          }}
          onMouseLeave={animationCall}
        >
          <div onClick={() => (window.location.href = '/salt-satyagrah')}>
            <img src={saltSatyagrahImg} alt='' />
            <span>Salt Satyagrah</span>
          </div>
          <div
            onClick={() => (window.location.href = '/satyagrah-smruti-trust')}
          >
            <img src={satyagrahTrustImg} alt='' />
            <span>Satyagrah Smruti Trust</span>
          </div>
          <div>
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
          <div>
            {' '}
            <img src={FacilitiesImg} alt='' />
            <span>Facilities & Attractions</span>
          </div>
        </div>
      )}

      <img src={wholeBGImg} alt='' className='wholebg' />

      <div
        className='talkbot-container'
        onClick={() => (window.location.href = '/bot')}
      >
        <img src={talkbotImg} alt='' />
        <span>Talk with Bapu</span>
      </div>
    </React.Fragment>
  )
}
