import { useRouter } from 'next/router'

import CompanySidebar from './components/company-sidebar';
import AdminProfile from '../admin-dashboard/components/profile';

import { Separator } from '@/components/ui/separator';

import CompanyList from '../admin-dashboard/components/c-list';
import { cUsers } from '../admin-dashboard/components/sample-data';


export default function CompanyDashboard(){

    const router = useRouter();
    
    return(
        <div className="flex flex-row">

      <div className="flex flex-col w-[225px]">
          <AdminProfile />
          <CompanySidebar />
      </div>
      <Separator orientation="vertical"/>
      <>
        <CompanyList cDataUser={cUsers} />
      </>
    </div>
    )
}