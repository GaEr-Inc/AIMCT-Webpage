import { AppShell } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

function Layout() {
  return (
    <AppShell
    // Disabled for now
    // navbar={<NavBar/>}
    header={<Header/>}
    footer={<Footer/>}>
      <Outlet/>
    </AppShell>
    )
}

export default Layout