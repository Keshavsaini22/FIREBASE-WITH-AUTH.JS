'use client'
import { Button, Stack } from '@mui/material'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../config/firebase'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()

  const handleLogout = () => {
    try {
      signOut(auth).then((res) => {
        router.push('/')
      })

    } catch (e) {
      console.log('e: ', e);
    }
  }
  return (
    <Stack>
      <Button onClick={handleLogout}>Logout</Button>
    </Stack>
  )
}

export default Home