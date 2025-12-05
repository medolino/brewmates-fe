'use client'

import Link from 'next/link'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useSearchParams } from 'next/navigation'
import { grey } from '@mui/material/colors'

export default function BackButton() {
  const searchParams = useSearchParams().toString()

  const backUrl = searchParams ? `/beers?${searchParams}` : '/beers'

  return (
    <Button
      startIcon={<ArrowBackIosIcon />}
      size="small"
      color="inherit"
      sx={{ color: grey[700], mb: 1 }}
      variant="text"
      LinkComponent={Link}
      href={backUrl}
    >
      Back to beer list
    </Button>
  )
}
