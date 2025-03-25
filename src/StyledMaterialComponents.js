import styled from '@emotion/styled'
import { TabList } from '@mui/lab'
import { Tab, Button, TextField } from '@mui/material'

const StyledTabs = styled(props => (
  <TabList
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#922731'
  }
})

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    // fontFamily: "var(--main-font-family)",
    fontSize: 15,
    marginRight: 1,
    color: '#000000',
    '&.Mui-selected': {
      color: '#922731'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(146, 39, 49, 0.32)'
    }
  })
)

const LinkButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  color: '#000000',
  fontFamily: "var(--main-font-family)",
  fontWeight: 500
  // color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  // '&:hover': {
  //   backgroundColor: purple[700],
  // },
}))

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7'
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C'
    }
  }
})

const RedditTextField = styled(props => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  width: '80%',
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderBottom: '1px solid #000',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  },
  '& .MuiInputLabel-root': {
    fontFamily: "var(--main-font-family)",
    fontWeight: 500,
    color: '#000000',
    fontSize: '1.1rem',
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      color: '#000000'
    }
  }
}))

const FilledButton = styled(Button)(({ theme }) => ({
  color: '#111111',
  backgroundColor: 'transparent',
  width: '80%',
  border: '2px solid #111111',
  borderRadius: 23,
  textTransform: 'capitalize',
  marginTop: 30,
  '&:hover': {
    backgroundColor: '#231514',
    color: '#fff'
  }
}))

export {
  StyledTabs,
  StyledTab,
  LinkButton,
  CssTextField,
  RedditTextField,
  FilledButton
}
