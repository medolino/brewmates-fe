'use client'

import styled from '@emotion/styled'
import Image from 'next/image'

const LogoContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 20,
  background: '#FFFFFF',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: 15,
  padding: '10px',
  width: 95,
  height: 95,
  [theme.breakpoints.up('sm')]: {
    width: 130,
    height: 130,
    padding: '14px'
  },
  [theme.breakpoints.up('md')]: {
    width: 150,
    height: 150,
    padding: '15px'
  },
  [theme.breakpoints.up('lg')]: {
    width: 190,
    height: 190,
    padding: '19px'
  }
}))

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%'
})

export default function HeaderLogo() {
  return (
    <LogoContainer>
      <ImageWrapper>
        <Image src="/images/logo-basic.svg" alt="Brew Mates - A beer for friends" fill />
      </ImageWrapper>
    </LogoContainer>
  )
}
