'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  padding: '20px 0',
  textAlign: 'center'
}))

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="https://untappd.com/brew-mates?ref=followbtn" target="_blank">
        <Image
          src="/images/untappd-icon.png"
          alt="Brew Mates Untappd"
          width={152}
          height={60}
          style={{ marginBottom: '10px', display: 'inline-block' }}
        />
      </Link>
      <Typography variant="body2" color="white">
        Copyright © 2025, Brew Mates
      </Typography>
    </FooterContainer>
  )
}
