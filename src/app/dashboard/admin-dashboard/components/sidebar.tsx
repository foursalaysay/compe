import React from 'react'

export default function SideBar() {

    const getUserURL = ""

  async function getUser(){
    try {
        const getUser = await fetch(getUserURL)
        return getUser.json
    } catch (error) {
        console.log("error fetching data")
    }
  }

  return (
    <div className='w-60 h-screen '>
        
    </div>
  )
}
