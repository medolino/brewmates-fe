'use client'

import { useEffect } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('An unexpected error occurred:', error)
  }, [error])

  return (
    <Box sx={{ textAlign: 'center', mt: 20 }}>
      <Typography variant="h3" gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please try again later.
      </Typography>
    </Box>
  )
}
