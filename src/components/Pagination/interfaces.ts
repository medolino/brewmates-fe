export interface PaginationProps {
  page: number
  perPage: number
  totalItems: number
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}
