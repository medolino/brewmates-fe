import { api, getUrl, API_ENDPOINTS } from '@/utils/api-client'

/**
 * Fetch detailed information about a specific beer by its ID and format certain fields for display.
 */
const fetchBeerDetails = async (id: string) => {
  const url = getUrl(API_ENDPOINTS.beer, { id })

  const { data } = await api.get(url)

  const details = {
    ...data,
    // convert numeric values to common display formats
    abv: parseFloat(data.abv).toFixed(2),
    ibu: Math.round(data.ibu),
    srm: Math.round(data.srm),
    releaseMonth: new Date(data.releasedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  return details
}

export { fetchBeerDetails }
