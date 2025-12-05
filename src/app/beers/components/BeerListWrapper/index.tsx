import BeerList from '../../components/BeerList'
import Pagination from '../Pagination'
import { fetchBeers } from '../../data'

import { BeerListWrapperProps } from './interfaces'

export default async function BeerListWrapper({ searchParams }: BeerListWrapperProps) {
  const { style, releaseYear, page } = searchParams

  const { data: beers, pageCount } = await fetchBeers({
    style,
    releaseYear,
    page
  })

  // set page count to 1 if no beers returned
  // this happens when user manually enters a page number, higher than the available pages
  const totalPages = beers.length > 0 ? pageCount : 0

  return (
    <>
      <BeerList beerItems={beers} />
      <Pagination page={page} pageCount={totalPages} />
    </>
  )
}
