'use client'

import SidebarMenuItems from "./dashboard/admin-dashboard/components/sidebar-menu-items";
import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "./dashboard/admin-dashboard/components/profile";

export default function Home() {
  return (
    <div className="flex flex-row">

      <div className="flex flex-col w-[225px]">
          <AdminProfile />
          <SidebarMenuItems />
      </div>
      <>
        
      </>
    </div>
  );
}
