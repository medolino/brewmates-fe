'use client'

import Link from 'next/link'

import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { DrawerProps } from './interfaces'

import { navigationItems } from '@/config/navigation'

/**
 * Drawer component for mobile navigation.
 */
export default function Drawer(props: DrawerProps) {
  const { window, isOpen, handleDrawerToggle } = props

  const container = window !== undefined ? () => window().document.body : undefined

  const drawerContent = (
    <Box sx={{ textAlign: 'right' }}>
      <IconButton onClick={handleDrawerToggle} color="inherit" sx={{ margin: '14px 16px' }}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <Divider color="#FFFFFF" />
      <List>
        {navigationItems.map(({ href, label }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'left' }}
              LinkComponent={Link}
              href={href}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={label} sx={{ padding: '2px 5px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <nav>
      <MuiDrawer
        anchor="right"
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 }
        }}
      >
        {drawerContent}
      </MuiDrawer>
    </nav>
  )
}
