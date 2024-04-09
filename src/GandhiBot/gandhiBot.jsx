/* eslint-disable no-unreachable */
import { Box, Grid, List, ListItem, ListItemText } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { LinkButton } from '../StyledMaterialComponents'
import GandhiBapuImg from '../images/Gandhi_Bapu_Salt_Satyagrah.png'
import Azad_Hindustan from './audio/Azad_Hindustan.mp3';
import audio1 from './audio/audio1.mp3';
import audio2 from './audio/audio2.mp3';
import bgImage from './images/flag_bg.webp';
import './gandhiBot.css';
import axios from 'axios';
import baseUrls from '../base-urls';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.lang = 'en-IN'

export default function GandhiBot() {
  const [value, setValue] = useState('1');
  const [listening, setListening] = useState(false);

  const bgsound = useRef();

  useEffect(() => {
    handleListen();
  }, [listening])

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  const toggleListen = () => {
    setListening(!listening);
  }

  const handleListen = () => {
    console.log('listening?', listening);

    if (listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click");
        document.getElementById("micButton").checked = false;
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      // document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').value = finalTranscript;

      if (finalTranscript) {
        fetchResponse();
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
          document.getElementById("micButton").checked = false;
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
  }

  const fetchResponse = () => {
    let queryText = document.getElementById('final').value;
    console.log("Fetching response", queryText);
    if (queryText) {
      axios.post(`${baseUrls.serverUrl}activities/dialogflow`, {
        languageCode: "en",
        queryText: queryText,
        sessionId: "abdc1234"
      }).then(res => {
        switch (res.data.response) {
          case 'Azad_Hindustan':
            bgsound.current = new Audio(Azad_Hindustan);
            bgsound.current.play();
            bgsound.current.loop = false;
            bgsound.current.volume = 1;
            break;
          case 'audio1':
            bgsound.current = new Audio(audio1);
            bgsound.current.play();
            bgsound.current.loop = false;
            bgsound.current.volume = 1;
            break;
          case 'audio2':
            bgsound.current = new Audio(audio2);
            bgsound.current.play();
            bgsound.current.loop = false;
            bgsound.current.volume = 1;
            break;

          default:
            break;
        }
      }).catch(err => {
        console.log("getting error while fetching response", err);
      });
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ width: '100%', typography: 'body1', backgroundImage: `url(${bgImage})`, height: "100vh" }}>
        <TabContext value={value} sx={{ minHeight: 35 }}>
          <TabPanel value='1'>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} lg={6}>

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
              <Grid item xs={12} md={6} lg={6} sx={{ height: '75vh' }}>
                <img src={GandhiBapuImg} alt='' className='sideimg' />
              </Grid>
              <Grid item xs={12} md={2} lg={2} sx={{ height: '75vh' }}></Grid>
              <Grid item xs={12} md={4} lg={4} sx={{ height: '75vh', display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                <List sx={{ border: "2px solid #ed9254", borderRadius: "16px" }}>
                  <ListItem>
                    <ListItemText primary="Apke sapno ka bharat kaisa hona chahiye?" sx={{ color: "#ed9254", cursor: "pointer" }} onClick={() => {
                      document.getElementById('final').value = "Apke sapno ka bharat kaisa hona chahiye?"
                      fetchResponse();
                    }} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Gandhi's philosophy for independent India" sx={{ color: "#ed9254", cursor: "pointer" }} onClick={() => {
                      document.getElementById('final').value = "Gandhi's philosophy for independent India"
                      fetchResponse();
                    }} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="What are your thought on Sarvdharma Samabhav?" sx={{ color: "#ed9254", cursor: "pointer" }} onClick={() => {
                      document.getElementById('final').value = "What are your thought on Sarvdharma Samabhav?"
                      fetchResponse();
                    }} />
                  </ListItem>
                </List>
              </Grid>
              {/* <button id='microphone-btn' className='button' onClick={toggleListen} /> */}
              <div className="button-container" onClick={() => toggleListen()}>
                <input type="checkbox" id="micButton" className="mic-checkbox" />
                <label htmlFor="micButton" className="mic-button">
                  <div className='mic'>
                    <div className='mic-button-loader'>
                    </div>
                    <div className="mic-base">
                    </div>
                  </div>
                  <div className="button-message">
                    <span>
                      PRESS TO TALK
                    </span>
                  </div>
                </label>
              </div>
              {/* <div id='interim' className='interim'></div> */}

            </Grid>
          </TabPanel>

          <Box
            sx={{
              position: isMobile ? 'fixed' : 'absolute',
              bottom: isMobile ? 0 : 8,
              width: '100%',
              // background: '#ffffff'
            }}
          >
            <input type="text" id='final' className='final' />
            <LinkButton onClick={fetchResponse}>
              Enter
            </LinkButton>
            {/* <StyledTabs
              onChange={handleChange}
              centered
              sx={{ justifyContent: 'space-evenly' }}
            >
              <StyledTab label='English' value='1' />
              <StyledTab label='Hindi' value='2' />
              <StyledTab label='Gujarati' value='3' />
            </StyledTabs> */}
          </Box>
        </TabContext>
      </Box>
    </React.Fragment>
  )
}
