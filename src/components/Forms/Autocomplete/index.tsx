import { useState, useRef } from 'react'
import MuiAutocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import type { AutocompleteProps, AutocompleteValue } from './interfaces'

const darkStyle = {
  '& .MuiInputBase-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // translucent light bg
    color: '#fff' // input text color
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc' // border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc'
  },
  '& .MuiInputLabel-root': {
    color: '#ccc'
  },
  '& .MuiSvgIcon-root': {
    color: '#ccc' // dropdown arrow
  }
}

export default function Autocomplete(props: AutocompleteProps) {
  const { config, sx } = props

  const { name, label, options, defaultValue, required, disabled, onChange, isDark } = config

  const initValue = defaultValue
    ? options.find((option) => option.id === defaultValue) || null
    : null

  const [value, setValue] = useState(initValue)

  const elementRef = useRef<HTMLInputElement>(null)

  const error = null // TODO: handle error state

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: AutocompleteValue | null
  ) => {
    setValue(newValue)

    if (onChange) {
      onChange(event, newValue)
    }
  }

  return (
    <MuiAutocomplete
      options={options}
      isOptionEqualToValue={(option, val) => option.id === val?.id}
      renderInput={(params) => {
        return (
          <>
            <TextField
              {...params}
              label={label}
              required={required}
              disabled={disabled}
              helperText={error != null ? error.message : null}
              error={!(error == null)}
              title={disabled ? "Value can't be changed." : undefined}
              inputRef={elementRef}
              sx={isDark ? darkStyle : {}}
            />
            <input type="hidden" name={name} value={value?.id || ''} />
          </>
        )
      }}
      value={value}
      onChange={handleChange}
      sx={sx}
    />
  )
}
