'use client'

import { useState } from 'react'
import { Menu, PawPrint } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
    },
    {
      name: 'Votá',
      path: '/vote',
    },
  ]

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="justify-between items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src="/salvemos-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="md:hidden">
            <Button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        <div
          className={`justify-self-center pb-5 md:block md:pb-0 md:mt-0 ${
            open ? 'block' : 'hidden'
          }`}
        >
          <div
            className={`flex ${
              open ? 'flex-col space-y-5' : 'flex-row space-x-3'
            }`}
          >
            {menus.map((item, idx) => (
              <Button key={idx} variant={'outline'} asChild>
                <Link href={item.path}>
                  {item.name}
                  <PawPrint className="ml-2" size={15} />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div
          className={`flex justify-center pb-5 md:block md:pb-0 md:mt-0 ${
            open ? 'block' : 'hidden'
          }`}
        >
          <Button>Entrar</Button>
        </div>
      </div>
    </nav>
  )
}
