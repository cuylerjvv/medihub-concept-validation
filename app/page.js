'use client'

import { auth } from "./firebase-config"
import { AuthStateChange } from "./context/AuthStateChangeContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Nav_home_page from '@components/Nav_home_page'
import Nav_mobile from "@components/Nav_mobile";
import Hero from "@components/Hero";
import Features from "@components/Features";
import Contact_form from "@components/Contact_form";

export default function landing() {

  const user = AuthStateChange()
  const router = useRouter()

  console.log(auth.currentUser)

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser.email)
      router.push('/home')
    } else {
      console.log('No auth')
    }
  }, [])

  return (
    <div>
      <Nav_mobile />
      <Nav_home_page />
      <Hero />
      <Features />
      <Contact_form />
    </div>
  )
}
