import React from 'react'
import SidebarMenuItems from './components/sidebar-menu-items'
import AdminProfile from './components/profile'

export default function AdminDashboard() {
  return(
    <div className='flex flex-row'>
        <SidebarMenuItems />
    </div>
  )
}
