import MuiPagination from '@mui/material/Pagination'

import { PaginationProps } from './interfaces'

export default function Pagination(props: PaginationProps) {
  const { page, perPage, totalItems, onChange } = props

  const numOfPages = Math.ceil(totalItems / perPage)

  return (
    <MuiPagination
      count={numOfPages}
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  )
}
