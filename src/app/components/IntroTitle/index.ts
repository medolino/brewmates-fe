'use client'

import styled from '@emotion/styled'

export default styled('h2')(({ theme }) => ({
  color: '#fff',
  fontFamily: theme.typography.fontFamily,
  fontSize: '2rem',
  '& span': {
    background: theme.palette.text.primary,
    padding: '5px 10px',
    fontWeight: 'bold'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
    '& span': {
      padding: '5px 25px'
    }
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.3rem'
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.5rem'
  }
}))
