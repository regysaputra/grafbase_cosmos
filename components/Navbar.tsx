import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.svg'
import { NavLinks } from '@/constants'

export default function Navbar() {
  const session = {}

  return (
    <nav className="flex justify-between items-center py-5 px-8 border-b border-nav-border gap-4">
      <div className="flex flex-1 items-center justify-start gap-10">
        <Link href="/">
          <Image
            src={logo}
            width={115}
            height={43}
            alt="Flexibble"
          />  
        </Link>
        <ul className="hidden text-sm font-medium gap-7 xl:flex">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>{link.text}</Link>
          ))}  
        </ul> 
      </div>

      <div className="flex justify-center items-center gap-4">

      </div>
    </nav>
  )
}
