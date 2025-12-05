'use client'

import styled from '@emotion/styled'

export default styled('h2')(({ theme }) => ({
  color: '#fff',
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.3rem',
  marginTop: 3,
  '& span': {
    display: 'inline-block',
    background: 'rgba(0, 0, 0, 0.55)',
    padding: '5px 25px',
    lineHeight: 1.5,
    whiteSpace: 'normal'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.4rem'
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem'
  }
}))
