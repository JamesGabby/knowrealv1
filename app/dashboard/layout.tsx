// app/dashboard/layout.tsx
import DashboardNavbar from "@/app/dashboard/DashboardNavbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNavbar />
      <main className="flex-1 bg-black p-6">{children}</main>
    </div>
  )
}
