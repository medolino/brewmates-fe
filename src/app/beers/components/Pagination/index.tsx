'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

import { useTransitionContext } from '@/contexts/TransitionContext'

import { PaginationProps } from './interfaces'

export default function PaginationClient({ page, pageCount }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { isPending, startTransition } = useTransitionContext()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('page', value.toString())

    startTransition(() => {
      router.push(`/beers?${params}`)
    })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '50px 0 40px' }}>
      <Pagination
        page={page}
        count={pageCount}
        onChange={handleChange}
        disabled={isPending || !pageCount}
      />
    </Box>
  )
}
