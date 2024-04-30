'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Stack } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log('data: ', data.user.email);
      router.push('/home')
    })
  }
  return (
    <Stack width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: '' }}>
      <Button onClick={() => {
        signInWithPopup(auth, provider).then((data) => {
          console.log('data: ',  data.user.email);
          router.push('/home')
        })
      }} variant="contained" sx={{ width: '250px' }}>Login With Google</Button>
    </Stack>
  );
}
