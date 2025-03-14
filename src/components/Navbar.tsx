import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { PawPrint } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import UserMenu from './UserMenu'
import ThemeButton from './ThemeButton'

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  const menus = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Nosotros',
      path: '/about',
    },
    {
      name: 'Ustedes',
      path: '/you',
      needsAuth: true,
    },
  ]

  return (
    <nav className="w-full border-b md:border-0">
      <div className="justify-between items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {/* Logo */}
        <div className="flex justify-center py-3 md:py-5 md:block">
          <div className="hidden md:flex">
            <Link href="/">
              <Image
                src="/salvemos-logo.png"
                alt="Logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
        </div>

        {/* Buttons */}
        <div className="justify-self-center pb-5 md:block md:pb-0 md:mt-0">
          <div className="grid grid-cols-2 gap-2 flex-row md:flex">
            {menus
              .filter(item => (item.needsAuth ? authStatus : true))
              .map((item, idx) => (
                <Button key={idx} variant={'secondary'} asChild>
                  <Link href={item.path}>
                    {item.name}
                    <PawPrint className="ml-2" size={15} />
                  </Link>
                </Button>
              ))}
          </div>
        </div>

        {/* User */}
        <div className="flex justify-center items-center pb-5 space-x-2 md:pb-0 md:mt-0">
          <ThemeButton />
          <UserMenu />
        </div>
      </div>
    </nav>
  )
}
