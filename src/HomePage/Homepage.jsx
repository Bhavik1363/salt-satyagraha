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

import $ from 'jquery'

export default function Homepage () {
  useEffect(() => {
    // let AnimeInterval = setInterval(() => {
    //   animationCircular()
    // }, 1000)
    // return () => clearInterval(AnimeInterval)
  })

  const animationCircular = () => {
    $('document').ready(function () {
      var block = $('#rotator ul li a').get()
      var angle = 60
      console.log('block', block)

      //   for (var i = 0; i < block.length; i++) {
      // console.log(block[i].style.transform)
      //   block[0].className = ''
      block[0].style.setProperty(
        'transform',
        `rotate(${angle * 1}deg) translate(13em) rotate(-${angle * 1}deg)`
      )

      block[1].className = ''
      block[1].style.transform = `rotate(${
        angle * 2
      }deg) translate(13em) rotate(-${angle * 2}deg)`

      block[2].className = ''
      block[2].style.transform = `rotate(${
        angle * 3
      }deg) translate(13em) rotate(-${angle * 3}deg)`

      block[3].className = ''
      block[3].style.transform = `rotate(${
        angle * 4
      }deg) translate(13em) rotate(-${angle * 4}deg)`

      block[4].className = ''
      block[4].style.transform = `rotate(${
        angle * 5
      }deg) translate(13em) rotate(-${angle * 5}deg)`

      block[5].className = ''
      block[5].style.transform = `rotate(${
        angle * 6
      }deg) translate(13em) rotate(-${angle * 6}deg)`

      angle = angle + 60
      // switch (block[i].classList[0]) {
      //   case 'spiritual':
      //     block[i].classList.remove('spiritual')
      //     block[i].classList.add('occupational')
      //     break

      //   case 'occupational':
      //     block[i].classList.remove('occupational')
      //     block[i].classList.add('emotional')
      //     break

      //   case 'emotional':
      //     block[i].classList.remove('emotional')
      //     block[i].classList.add('environmental')
      //     break

      //   case 'environmental':
      //     block[i].classList.remove('environmental')
      //     block[i].classList.add('intellectual')
      //     break

      //   case 'intellectual':
      //     block[i].classList.remove('intellectual')
      //     block[i].classList.add('social')
      //     break

      //   case 'social':
      //     block[i].classList.remove('social')
      //     block[i].classList.add('spiritual')
      //     break

      //   default:
      //     break
      // }
      //   }
    })
  }

  return (
    <React.Fragment>
      <img alt='' src={logoImg} className='mainlogo' />
      <div className='circle-menu' id='rotator'>
        <ul>
          <li>
            <a
              id={`circle1`}
              className='spiritual'
              href='/salt-satyagrah'
              onClick={() => (window.location.href = '/salt-satyagrah')}
            >
              <img src={saltSatyagrahImg} alt='' />
              <span>Salt Satyagrah</span>
            </a>
          </li>

          <li>
            <a id={`circle1`} className='occupational' href='#'>
              <img src={satyagrahTrustImg} alt='' />
              <span>Satyagrah Smruti Trust</span>
            </a>
          </li>

          <li>
            <a id={`circle1`} className='emotional' href='#'>
              <img src={contactUsImg} alt='' />
              <span>Contact Us</span>
            </a>
          </li>

          <li>
            <a id={`circle1`} className='environmental' href='#'>
              <img src={SocialMediaImg} alt='' />
              <span>Social Media</span>
            </a>
          </li>

          <li>
            <a id={`circle1`} className='intellectual' href='#'>
              <img src={HistoricalImg} alt='' />
              <span>Historical Evidences</span>
            </a>
          </li>

          <li>
            <a id={`circle1`} className='social' href='#'>
              <img src={FacilitiesImg} alt='' />
              <span>Facilities & Attractions</span>
            </a>
          </li>
        </ul>
      </div>

      <img src={wholeBGImg} alt='' className='wholebg' />
    </React.Fragment>
  )
}
