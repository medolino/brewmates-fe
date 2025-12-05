import { Suspense } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import FilterForm from './components/FilterForm'
import BeerListWrapper from './components/BeerListWrapper'
import BeerListSkeleton from './components/BeerList/skeleton'

interface Props {
  searchParams: {
    style?: string
    releaseYear?: string
    page?: string
  }
}

export default async function BeersPage({ searchParams }: Props) {
  const params = await searchParams

  const style = params.style ?? ''
  const releaseYear = params.releaseYear ?? ''
  const page = params.page ? parseInt(params.page) : 1

  const beerListParams = {
    style,
    releaseYear,
    page
  }

  return (
    <>
      <FilterForm defaultValues={{ style, releaseYear }} />
      <Container>
        <Box sx={{ mt: 5 }}>
          <Suspense fallback={<BeerListSkeleton />}>
            <BeerListWrapper searchParams={beerListParams} />
          </Suspense>
        </Box>
      </Container>
    </>
  )
}
