'use client'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import { BeerListItemProps } from './interfaces'

const ImageWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1'
})

// padding based on screen size
const ImageContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #000',
  borderRadius: 5,
  padding: '18px',
  [theme.breakpoints.up('sm')]: {
    padding: '20px'
  },
  [theme.breakpoints.up('md')]: {
    padding: '25px'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '30px'
  }
}))

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

export default function BeerListItem(props: BeerListItemProps) {
  const { id, name, style, releasedAt } = props

  const searchParams = useSearchParams().toString()

  const beerUrl = searchParams ? `/beers/${id}?${searchParams}` : `/beers/${id}`
  const releaseYear = new Date(releasedAt).getFullYear()

  const urlEncodedStyle = encodeURIComponent(style)

  const imageUrl = `${apiBaseUrl}/api/beer-labels/${urlEncodedStyle}`

  return (
    <Link href={beerUrl}>
      <Box sx={{ textAlign: 'center' }}>
        <ImageContainer>
          <ImageWrapper>
            <Image
              src={imageUrl}
              alt={`Brew Mates Beer - ${name}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </ImageWrapper>
        </ImageContainer>
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          {name}
        </Typography>
        <Chip label={style} size="small" color="default" variant="outlined" />
        <Typography variant="body2" color="grey" sx={{ mt: 1 }}>
          {releaseYear}
        </Typography>
      </Box>
    </Link>
  )
}
