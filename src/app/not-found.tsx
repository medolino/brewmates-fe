import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', mt: 20 }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={Link} href="/" variant="contained">
        Go to Start Page
      </Button>
    </Box>
  )
}
