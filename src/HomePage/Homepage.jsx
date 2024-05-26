/* eslint-disable */
import React, { useEffect, useState } from 'react'
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

export default function Homepage() {

  const [defaultRotarSetting, setDefaultRotarSetting] = useState({
    angle: 0
  })
  useEffect(() => {
    animationCall()
  }, [])

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

  const getRotationAngle = ( elid ) => {
    var el = $(elid)[0];
    var style = window.getComputedStyle(el, null);
    var transform = style.getPropertyValue("-webkit-transform") ||
         style.getPropertyValue("-moz-transform") ||
         style.getPropertyValue("-ms-transform") ||
         style.getPropertyValue("-o-transform") ||
         style.getPropertyValue("transform") ||
         "fail...";
  
    if( transform !== "none") {
  
      var values = transform.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
      var a = values[0];
      var b = values[1];
      var c = values[2];
      var d = values[3];

      var radians = Math.atan2(b, a);
  
      if ( radians < 0 ) {
        radians += (2 * Math.PI);
      }
      var angle = Math.round( radians * (180/Math.PI));
    } else {
      var angle = 0;
    }
    
    return angle
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
      )}

      <img src={wholeBGImg} alt='' className='wholebg' />

      <a className='talkbot-container' href='/bot'>
        <img src={talkbotImg} alt='' />
        <span>Talk with Bapu</span>
      </a>
    </React.Fragment>
  )
}
