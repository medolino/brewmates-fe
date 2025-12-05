export interface FormState {
  message: string | null
  values: Record<string, any>
  errors: Record<string, any>
}
