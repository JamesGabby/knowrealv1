"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Home, BarChart2, Settings, LogOut } from "lucide-react"
import { sansationLogo } from "@/fonts/Sansation"



const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/analytics", label: "Meditation", icon: BarChart2 },
  { href: "/dashboard/analytics", label: "Lucid", icon: BarChart2 },
  { href: "/dashboard/settings", label: "OBE", icon: Settings },
]

export default function DashboardNavbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-200 shadow-sm">
      {/* Left: Logo */}
      <div className={"flex items-center space-x-2"}>
        <span className={`${sansationLogo.className} text-xl font-bold text-white`}>KNOW REAL</span>
      </div>

      {/* Middle: Nav links */}
      <div className="flex items-center space-x-6">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                isActive ? "text-blue-400" : "text-gray-300 hover:text-gray-400"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>

      {/* Right: Sign out */}
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign out</span>
      </button>
    </nav>
  )
}
