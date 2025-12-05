import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import BackButton from './components/BackButton'
import BeerImage from './components/BeerImage'
import { fetchBeerDetails } from './data'

type BeerDetailsProps = {
  params: {
    beerId: string
  }
}

// export default async function
export default async function BeerDetails({ params }: BeerDetailsProps) {
  const { beerId } = await params

  let beerDetails

  try {
    beerDetails = await fetchBeerDetails(beerId)
  } catch (error) {
    // handle invalid uuidv4 or non-existing beer
    if (error.status >= 400 && error.status < 500) {
      notFound()
    } else {
      throw error
    }
  }

  const untappdUrl = beerDetails.untappdUrl || `https://untappd.com/brew-mates?ref=followbtn`

  return (
    <Container>
      <Box sx={{ mt: 5, mb: 10 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ mt: 12 }}>
            <BeerImage style={beerDetails.style} name={beerDetails.name} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 2 }}>
            <BackButton />
            <Typography variant="h4">{beerDetails.name}</Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
              {beerDetails.description}
            </Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 3 }}>
              TYPE:
            </Typography>
            <Typography variant="h5">{beerDetails.style}</Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 2 }}>
              ABV:
            </Typography>
            <Typography variant="h5">{beerDetails.abv}%</Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 2 }}>
              IBU:
            </Typography>
            <Typography variant="h5">{beerDetails.ibu}</Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 2 }}>
              SRM:
            </Typography>
            <Typography variant="h5">{beerDetails.srm}</Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 2 }}>
              HOPS:
            </Typography>
            <Typography variant="h5">{beerDetails.hops}</Typography>
            <Typography variant="h6" color="grey.600" sx={{ mt: 2 }}>
              RELEASED:
            </Typography>
            <Typography variant="h5">{beerDetails.releaseMonth}</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }} sx={{ mt: 10 }}>
            <Link href={untappdUrl} target="_blank">
              <Image
                src="/images/untappd-check-in.png"
                alt="Check in on Untappd"
                width={152}
                height={60}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
