import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const containerStyles = {
  mt: {
    sm: 0,
    md: 10,
    lg: 15
  },
  mb: 10
}

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Box sx={containerStyles}>{children}</Box>
    </Container>
  )
}
