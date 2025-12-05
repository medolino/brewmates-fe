'use client'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import BeerListItem from '../BeerListItem'
import BeerListItemsSkeleton from './skeleton'
import { useTransitionContext } from '@/contexts/TransitionContext'

import { BeerListProps } from './interfaces'

export default function BeerList(props: BeerListProps) {
  const { beerItems = [] } = props

  const { isPending } = useTransitionContext()

  if (isPending) {
    return <BeerListItemsSkeleton />
  }

  if (!beerItems.length) {
    return (
      <Box sx={{ mt: 15, textAlign: 'center' }}>
        <Typography variant="h4">No beers found.</Typography>
      </Box>
    )
  }

  const beerListItems = beerItems.map((beer) => (
    <Grid key={beer.id} size={{ xs: 6, sm: 4, md: 3 }}>
      <BeerListItem id={beer.id} name={beer.name} style={beer.style} releasedAt={beer.releasedAt} />
    </Grid>
  ))

  return (
    <Grid container spacing={4}>
      {beerListItems}
    </Grid>
  )
}
