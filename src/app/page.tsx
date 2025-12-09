'use server'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import IntroContainer from './components/IntroContainer'
import IntroTitle from './components/IntroTitle'
import IntroText from './components/IntroText'

export default async function Home() {
  return (
    <>
      <IntroContainer>
        <Box
          sx={{
            textAlign: 'right',
            pt: {
              xs: '18vh',
              sm: '22vh'
            },
            height: '80vh'
          }}
        >
          <IntroTitle>
            <span>Welcome to BREW MATES</span>
          </IntroTitle>
          <IntroText>
            <span>Where homemade beers bring homegrown friendships to life.</span>
          </IntroText>
          <Button
            variant="contained"
            color="primary"
            component="a"
            size="large"
            href="/beers"
            sx={{ mt: 2 }}
          >
            See our beers
          </Button>
        </Box>
      </IntroContainer>
      <Container>
        <Box sx={{ mt: 5, mb: 10 }}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Image
                src="/images/beers/brewmates-beer-transparent-reflection.png"
                alt="Brew Mates"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4">Passion, Craftsmanship, and Friendship</Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                At <strong>Brew Mates</strong>, our non-commercial home brewery in Slovenia, we
                celebrate the joy of friendship through our craft. With the tagline{' '}
                <strong>'A beer for friends'</strong>, we brew small-scale batches that are
                exclusively enjoyed within our cherished circle of beer-loving friends.
              </Typography>

              <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
                This website is a personal project, created to document my brewing journey, share
                stories from the brewhouse, and celebrate the people who made it all possible.
              </Typography>

              <Button variant="contained" color="primary" component="a" size="large" href="/about">
                Read more about how it all started
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
