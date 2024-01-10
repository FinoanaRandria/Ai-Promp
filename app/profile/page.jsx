'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'



const Profile = () => {
    
  const handleEdit=()=>{

  }

  const handleDelete=  async ()=>{

  }
  return (
    <>
    
    <Profile
     name="My"
     desc="Welcome to your personalized page"
     data={[]}
     handleEdit={handleEdit}
     handleDelete={handleDelete}
    />
    </>
  )
}

export default Profile