'use client'

import { createContext, useContext, useState } from 'react'

const FilterQueryParamsContext = createContext(null)

/**
 * Context provider to store filter and page query params while navigating in /beers page.
 * Context is used to restore filter and page query params when navigating back from beer detail page.
 */
export const FilterQueryParamsProvider = ({ children }) => {
  const [filterQueryParams, setFilterQueryParams] = useState(null)

  return (
    <FilterQueryParamsContext.Provider
      value={{
        filterQueryParams,
        setFilterQueryParams
      }}
    >
      {children}
    </FilterQueryParamsContext.Provider>
  )
}

export const useFilterQueryParams = () => {
  const context = useContext(FilterQueryParamsContext)

  if (!context) {
    throw new Error('useFilterQueryParams must be used within a FilterQueryParamsProvider')
  }

  return context
}
