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
    <footer className="w-full border-t mt-7 text-xs">
      <div className="flex justify-between items-center max-w-screen-xl py-3 px-9 mx-auto md:px-8 md:py-0">
        <div className="flex justify-center py-3 md:py-5 md:block">
          <Link
            href="https://www.instagram.com/salvemospatitas.ok/"
            target="_blank"
            className="flex items-center"
          >
            <Instagram size={20} className="text-gray-400" />
          </Link>
        </div>

        <div className="justify-self-center pb-1 md:block md:pb-0 md:mt-0">
          <div className="hidden md:flex text-gray-400">
            Copyright © 2024 | Salvemos Patitas ONG
          </div>
        </div>

        <div className="flex justify-center md:block md:pb-0 md:mt-0 text-underline text-primary">
          <LogoutLink className="flex items-center">
            Salir
            <LogOut size={18} className="ml-1" />
          </LogoutLink>
        </div>
      </div>
    </footer>
  )
}
