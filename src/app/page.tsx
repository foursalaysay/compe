'use client'

import SidebarMenuItems from "./dashboard/admin-dashboard/components/sidebar-menu-items";
import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "./dashboard/admin-dashboard/components/profile";
import { Separator } from "@/components/ui/separator";
import CompanyList from "./dashboard/admin-dashboard/components/c-list";


import { cUsers } from "./dashboard/admin-dashboard/components/sample-data";

export default function Home() {
  return (
    <div className="flex flex-row">

      <div className="flex flex-col w-[225px]">
          <AdminProfile />
          <SidebarMenuItems />
      </div>
      <Separator orientation="vertical"/>

      <>
        <CompanyList cDataUser={cUsers} />
      </>
    </div>
  );
}
