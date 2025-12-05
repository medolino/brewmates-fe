export interface AutocompleteValue {
  id: string
  label: string
}

export interface AutocompletePropsConfig {
  name: string
  label: string
  options: AutocompleteValue[]
  defaultValue: AutocompleteValue | null
  required?: boolean
  disabled?: boolean
  isDark?: boolean
  onChange?: (event: any, newValue: AutocompleteValue | null) => void
}

export interface AutocompleteProps {
  config: AutocompletePropsConfig
  sx?: Record<string, any>
}
