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



// LIST ALL COMPANY AND MAKE CARD TO SEE IMAGES, NAME, ADDRESS, CONTACT NUMBER AND REPRESENTATIVE

export default function CompanyList(cUser : CompanyData) {
  return (
    <div className='w-calc[100vw - 225px)] h-screen'>
      {cUser.map(() => {
          <Card>
             <Image
             src={} />
          </Card>
      })}
        

         
    </div>
  )
}
