/* eslint-disable */
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  IconButton
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { LinkButton } from '../StyledMaterialComponents'
import GandhiBapuImg from '../images/BotBG.png'
import Azad_Hindustan from './audio/Azad_Hindustan.mp3'
import audio1 from './audio/audio1.mp3'
import audio2 from './audio/audio2.mp3'

import './gandhiBot.css'
import axios from 'axios'
import baseUrls from '../base-urls'
import { MicNoneOutlined, Pause, Send, Stop } from '@mui/icons-material'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.lang = 'en-IN'

export default function GandhiBot() {
  const [listening, setListening] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  const bgsound = useRef()

  useEffect(() => {
    handleListen()
  }, [listening])

  const toggleListen = () => {
    setListening(!listening)
  }

  const handleListen = () => {
    if (listening && !speaking) {
      recognition.start()
      recognition.onend = () => {
        console.log('...continue listening...')
        recognition.start()
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log('Stopped listening per click')
        document.getElementById('micButton').checked = false
      }
    }

    recognition.onstart = () => {
      console.log('Listening!')
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) finalTranscript += transcript + ' '
        else interimTranscript += transcript
      }
      // document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').value = finalTranscript

      if (finalTranscript) {
        fetchResponse()
      }

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').value = finalText
          document.getElementById('micButton').checked = false
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log('Error occurred in recognition: ' + event.error)
    }
  }

  const fetchResponse = () => {
    let queryText = document.getElementById('final').value
    console.log('Fetching response', queryText)
    if (queryText) {
      axios
        .post(`${baseUrls.serverUrl}activities/dialogflow`, {
          languageCode: 'en',
          queryText: queryText,
          sessionId: 'abdc1234'
        })
        .then(res => {
          switch (res.data.response) {
            case 'Azad_Hindustan':
              bgsound.current = new Audio(Azad_Hindustan)
              bgsound.current.play()
              bgsound.current.loop = false
              bgsound.current.volume = 1

              setSpeaking(true)
              toggleListen()
              break

            case 'audio1':
              bgsound.current = new Audio(audio1)
              bgsound.current.play()
              bgsound.current.loop = false
              bgsound.current.volume = 1
              setSpeaking(true)
              toggleListen()
              break

            case 'audio2':
              bgsound.current = new Audio(audio2)
              bgsound.current.play()
              bgsound.current.loop = false
              bgsound.current.volume = 1
              setSpeaking(true)
              toggleListen()
              break

            default:
              break
          }
        })
        .catch(err => {
          console.log('getting error while fetching response', err)
        })
    }
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
            {'Talk with Bapu'}
          </Typography>

          <LinkButton onClick={() => (window.location.href = '/')}>
            Back
          </LinkButton>
        </Grid>

        <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
          <img src={GandhiBapuImg} alt='' className='sideimg' />
        </Grid>

        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          sx={{
            height: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div onClick={() => toggleListen()}>
            <input type='checkbox' id='micButton' className='mic-checkbox' />
            {!listening ? (
              <label htmlFor='micButton' className='mic-button'>
                <MicNoneOutlined sx={{ fontSize: 40, color: '#922731' }} />
                <span>Tap to Speak</span>
              </label>
            ) : !speaking ? (
              <div className='anim-container'>
                <span className='circles lis1'></span>
                <span className='circles lis2'></span>
                <span className='circles lis3'></span>
                <span className='circles lis4'></span>
              </div>
            ) : (
              <React.Fragment>
                <IconButton
                  onClick={() => {
                    recognition.stop()
                    recognition.onend = () => {
                      document.getElementById('micButton').checked = false
                      document.getElementById('final').value = ''
                    }
                  }}
                  sx={{ background: '#922731', color: '#fff' }}
                >
                  <Stop />
                </IconButton>
              </React.Fragment>
            )}
          </div>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <FormControl sx={{ m: 1, width: '60%' }} variant='standard'>
              <InputLabel shrink htmlFor='final'>
                Enter here
              </InputLabel>
              <Input
                id='final'
                type={'text'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton sx={{ padding: 0 }} onClick={fetchResponse}>
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <List sx={{ width: '60%' }}>
              <ListItem>
                <ListItemText
                  primary='Apke sapno ka bharat kaisa hona chahiye?'
                  disableTypography
                  sx={{
                    cursor: 'pointer',
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    fontWeight: 600
                  }}
                  onClick={() => {
                    document.getElementById('final').value =
                      'Apke sapno ka bharat kaisa hona chahiye?'
                    fetchResponse()
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Gandhi's philosophy for independent India"
                  disableTypography
                  sx={{
                    cursor: 'pointer',
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    fontWeight: 600
                  }}
                  onClick={() => {
                    document.getElementById('final').value =
                      "Gandhi's philosophy for independent India"
                    fetchResponse()
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='What are your thought on Sarvdharma Samabhav?'
                  disableTypography
                  sx={{
                    cursor: 'pointer',
                    fontFamily: ['Inter', 'sans-serif'].join(','),
                    fontWeight: 600
                  }}
                  onClick={() => {
                    document.getElementById('final').value =
                      'What are your thought on Sarvdharma Samabhav?'
                    fetchResponse()
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
