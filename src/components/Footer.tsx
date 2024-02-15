import {
  getKindeServerSession,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { Instagram, LogOut } from 'lucide-react'
import Link from 'next/link'

export default async function Footer() {
  const { isAuthenticated } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  return (
    <footer className="bg-white w-full border-t mt-7 text-xs">
      <div className="justify-between items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {/* Logo */}
        <div className="flex justify-center py-3 md:py-5 md:block">
          <Link
            href="https://www.instagram.com/salvemospatitas.ok/"
            target="_blank"
            className="flex items-center"
          >
            <Instagram size={20} className="text-gray-400" />
          </Link>
        </div>

        {/* Buttons */}
        <div className="justify-self-center pb-1 md:block md:pb-0 md:mt-0">
          <div className="hidden md:flex text-gray-400">
            Copyright © 2024 | Salvemos Patitas ONG
          </div>
        </div>

        {/* User */}
        <div className="flex justify-center pb-5 md:block md:pb-0 md:mt-0 text-underline text-primary">
          <LogoutLink className="flex items-center">
            Salir
            <LogOut size={18} className="ml-1" />
          </LogoutLink>
        </div>
      </div>
    </footer>
  )
}
