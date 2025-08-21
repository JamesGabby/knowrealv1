"use client"

import { signOut, useSession } from "next-auth/react"

export default function DashboardClient() {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded bg-red-500 px-4 py-2 text-white"
      >
        Sign out
      </button>
    </div>
  )
}
