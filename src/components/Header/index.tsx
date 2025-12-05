'use client'

import { useState } from 'react'
import Link from 'next/link'
import Styled from '@emotion/styled'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import HeaderLogo from '@/components/HeaderLogo'
import Drawer from '@/components/Header/Drawer'

import { navigationItems } from '@/config/navigation'

const NavigationItem = Styled(Typography)(({ theme }) => ({
  padding: '0 0 0 40px',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.secondary.main
  }
}))

/**
 * Header component
 */
export default function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerIsOpen((prevState) => !prevState)
  }

  const headerNaviItems = navigationItems.map(({ href, label }) => (
    <Link key={label} href={href} style={{ textDecoration: 'none' }}>
      <NavigationItem variant="h6">{label}</NavigationItem>
    </Link>
  ))

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" component="nav" elevation={0}>
          <Toolbar>
            <Link href="/">
              <HeaderLogo />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>{headerNaviItems}</Box>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer isOpen={drawerIsOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  )
}
