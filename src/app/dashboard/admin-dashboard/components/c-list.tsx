import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CompanyData } from './sample-data'
import Image from 'next/image'

interface cProps {
  cDataUser : CompanyData[]
}


// LIST ALL COMPANY AND MAKE CARD TO SEE IMAGES, NAME, ADDRESS, CONTACT NUMBER AND REPRESENTATIVE

export default function CompanyList({ cDataUser } : cProps) {
  
  return (
    <div className='w-calc[100vw - 225px)] h-screen flex flex-wrap'>
      {cDataUser.map(obj => (
          <Card key={obj.id} className='flex flex-row'>
          <Image
          className='w-[200px] p-0'
          src={obj.image}
          alt={obj.image}
           />
           <div className='flex flex-col p-5 items-center'>
           <h4>{obj.company_name}</h4>
           <p>{obj.address}</p>
           <p>{obj.contact_number}</p>
           <p>{obj.representative}</p>
           </div>
       </Card>
      ))}
      
      
        

         
    </div>
  )
}