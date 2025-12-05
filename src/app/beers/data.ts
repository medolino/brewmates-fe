import { RequestQueryBuilder } from '@dataui/crud-request'

import { api, API_ENDPOINTS } from '@/utils/api-client'

const ITEMS_PER_PAGE = 12

/**
 * Create a date filter which is inside the range of the provided year.
 */
const buildReleaseYearFilter = (year?: string) => {
  if (!year) return

  const yearNumber = parseInt(year)

  const startDate = new Date(yearNumber, 0, 1)
  const endDate = new Date(yearNumber + 1, 0, 1)

  return {
    $gte: startDate.toISOString(),
    $lt: endDate.toISOString()
  }
}

/**
 * Fetch beers from the API with optional filters.
 */
const fetchBeers = async (query: Record<string, string | number> = {}) => {
  const filteredQuery = Object.entries(query).reduce((acc, [key, value]) => {
    if (value != null && value !== '') {
      acc[key] = value
    }

    return acc
  }, {})

  const { releaseYear, page, ...otherParams } = filteredQuery

  const filters = {
    ...otherParams,
    ...(releaseYear ? { releasedAt: buildReleaseYearFilter(releaseYear) } : {})
  }

  const requestQuery = RequestQueryBuilder.create({
    search: filters,
    page,
    limit: ITEMS_PER_PAGE
  })

  const { data } = await api.get(API_ENDPOINTS.beers, { params: requestQuery.queryObject })

  return data
}

export { ITEMS_PER_PAGE, fetchBeers }
