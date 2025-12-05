'use client'

import styled from '@emotion/styled'

import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const ImageWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '1/1'
})

const ImageContainer = styled(Box)({
  minWidth: '100%',
  minHeight: '100%'
})

export default function BeerListItemSkeleton() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <ImageContainer>
        <ImageWrapper>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </ImageWrapper>
      </ImageContainer>
      <Skeleton variant="text" width="80%" height={40} sx={{ mt: 2, mb: 1 }} />
      <Skeleton variant="rounded" width="50%" height={25} />
    </Box>
  )
}
