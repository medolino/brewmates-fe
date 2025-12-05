'use client'

import styled from '@emotion/styled'

import Box from '@mui/material/Box'

export default styled(Box)(({ theme }) => ({
  background: 'url(/images/intro-05.jpg)',
  height: '80vh',
  backgroundSize: 'cover',
  padding: '0 16px',
  [theme.breakpoints.up('md')]: {
    padding: '0 50px'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 140px'
  }
}))
