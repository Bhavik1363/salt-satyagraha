import styled from '@emotion/styled'
import { TabList } from '@mui/lab'
import { Tab, Button } from '@mui/material'

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
    fontWeight: 600,
    fontFamily: ['Inter', 'sans-serif'].join(','),
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
  fontFamily: ['Inter', 'sans-serif'].join(','),
  fontWeight: 500
  // color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  // '&:hover': {
  //   backgroundColor: purple[700],
  // },
}))

export { StyledTabs, StyledTab, LinkButton }
