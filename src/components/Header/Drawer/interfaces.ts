export interface DrawerProps {
  window?: () => Window
  isOpen: boolean
  handleDrawerToggle: () => void
}
