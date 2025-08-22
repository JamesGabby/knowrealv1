"use client"

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function DashboardClient() {
  const { data: session } = useSession()

  if (!session) {
      redirect('/')
  }

  return (
    <div>
      <h1 className="text-black">Dashboard</h1>
    </div>
  )
}
