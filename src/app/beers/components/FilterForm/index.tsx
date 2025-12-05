'use client'

import { useActionState, useRef } from 'react'
import { useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Autocomplete from '@/components/Forms/Autocomplete'
import { useTransitionContext } from '@/contexts/TransitionContext'

import { FilterFormProps } from './interfaces'

const breweryStartYear = 2015

const yearOptions = Array.from(
  { length: new Date().getFullYear() - breweryStartYear + 1 },
  (_, i) => breweryStartYear + i
)
  .reverse()
  .map((year) => ({
    id: year.toString(),
    label: year.toString()
  }))

/**
 * [
  "American Brown Ale",
  "American IPA",
  "American Pale Ale",
  "Best Bitter",
  "Bohemian Pilsner",
  "British Golden Ale",
  "Brown Porter",
  "California Common",
  "Christmas/Winter Specialty Spice Beer",
  "Cream Ale",
  "Czech Premium Pale Lager",
  "Dark Mild",
  "English Porter",
  "Extra Special/Strong Bitter (English Pale Ale)",
  "German Pils",
  "Irish Red Ale",
  "Irish Stout",
  "Kölsch",
  "Munich Dunkel",
  "Munich Helles",
  "Oatmeal Stout",
  "Robust Porter",
  "Special/Best/Premium Bitter",
  "Strong Bitter",
  "Vienna Lager",
  "Weizen/Weissbier",
  "Witbier"
]

 */

// TODO: read from mapper
const beerStyles = [
  { id: 'American Brown Ale', label: 'American Brown Ale' },
  { id: 'American IPA', label: 'American IPA' },
  { id: 'American Pale Ale', label: 'American Pale Ale' },
  { id: 'Best Bitter', label: 'Best Bitter' },
  { id: 'Bohemian Pilsner', label: 'Bohemian Pilsner' },
  { id: 'British Golden Ale', label: 'British Golden Ale' },
  { id: 'Brown Porter', label: 'Brown Porter' },
  { id: 'California Common', label: 'California Common' },
  {
    id: 'Christmas/Winter Specialty Spice Beer',
    label: 'Christmas/Winter Specialty Spice Beer'
  },
  { id: 'Cream Ale', label: 'Cream Ale' },
  { id: 'Czech Premium Pale Lager', label: 'Czech Premium Pale Lager' },
  { id: 'Dark Mild', label: 'Dark Mild' },
  { id: 'English Porter', label: 'English Porter' },
  {
    id: 'Extra Special/Strong Bitter (English Pale Ale)',
    label: 'Extra Special/Strong Bitter (English Pale Ale)'
  },
  { id: 'German Pils', label: 'German Pils' },
  { id: 'Irish Red Ale', label: 'Irish Red Ale' },
  { id: 'Irish Stout', label: 'Irish Stout' },
  { id: 'Kölsch', label: 'Kölsch' },
  { id: 'Munich Dunkel', label: 'Munich Dunkel' },
  { id: 'Munich Helles', label: 'Munich Helles' },
  { id: 'Oatmeal Stout', label: 'Oatmeal Stout' },
  { id: 'Robust Porter', label: 'Robust Porter' },
  { id: 'Special/Best/Premium Bitter', label: 'Special/Best/Premium Bitter' },
  { id: 'Strong Bitter', label: 'Strong Bitter' },
  { id: 'Vienna Lager', label: 'Vienna Lager' },
  { id: 'Weizen/Weissbier', label: 'Weizen/Weissbier' },
  { id: 'Witbier', label: 'Witbier' }
]

export default function FilterForm(props: FilterFormProps) {
  const { defaultValues } = props

  const formRef = useRef<HTMLFormElement>(null)

  const router = useRouter()
  const { isPending, startTransition } = useTransitionContext()

  const handleFormChange = async (prevState: Record<string, unknown>, queryData: FormData) => {
    const params = new URLSearchParams({
      style: queryData.get('style')?.toString() || '',
      releaseYear: queryData.get('releaseYear')?.toString() || '',
      page: '1'
    }).toString()

    startTransition(() => {
      router.push(`/beers?${params}`)
    })
  }

  const [formState, formAction] = useActionState(handleFormChange, {})

  /**
   * Handle form submission without button click
   */
  const handleAutoSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  /**
   * Submit form on value change
   */
  const handleValueChange = () => {
    // setTimeout is used to ensure that the form is submitted after the value is actually changed
    setTimeout(() => {
      handleAutoSubmit()
    }, 0)
  }

  return (
    <Box sx={{ minHeight: '150px', backgroundColor: '#2a2a2a', pt: 8, pb: 2 }}>
      <Container>
        <form noValidate ref={formRef} action={formAction}>
          <Grid
            container
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-end', sm: 'center' }}
            spacing={2}
          >
            <Grid
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' }
              }}
            ></Grid>
            <Grid size={{ xs: 'auto' }}>
              <Autocomplete
                config={{
                  name: 'style',
                  label: 'Beer Style',
                  options: beerStyles,
                  defaultValue: defaultValues?.style || null,
                  disabled: isPending,
                  isDark: true,
                  onChange: () => handleValueChange()
                }}
                sx={{
                  width: '240px'
                }}
              />
            </Grid>
            <Grid size={{ xs: 'auto' }}>
              <Autocomplete
                config={{
                  name: 'releaseYear',
                  label: 'Release Year',
                  options: yearOptions,
                  defaultValue: defaultValues?.releaseYear || null,
                  disabled: isPending,
                  isDark: true,
                  onChange: () => handleValueChange()
                }}
                sx={{
                  width: '200px'
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}
