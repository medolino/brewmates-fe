import { NextRouter } from 'next/router'

/**
 * Helper function to manage URL search parameters in Next.js
 */
const SearchParamsHelper = (searchParams: URLSearchParams, router: NextRouter) => {
  /**
   * Update the search parameters in the URL
   */
  const updateSearchParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())

    for (const [key, value] of Object.entries(newParams)) {
      if (value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  return {
    updateSearchParams
  }
}

export default SearchParamsHelper
