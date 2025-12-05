import Grid from '@mui/material/Grid'

import BeerListItemSkeleton from '../BeerListItem/skeleton'

export default function BeerListItemsSkeleton() {
  const skeletonItems = Array.from({ length: 4 }, (_, index) => (
    <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
      <BeerListItemSkeleton />
    </Grid>
  ))

  return (
    <Grid container spacing={4}>
      {skeletonItems}
    </Grid>
  )
}
