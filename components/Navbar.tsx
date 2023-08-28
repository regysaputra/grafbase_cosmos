import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/cosmos.svg'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { signOut } from 'next-auth/react'

export default async function Navbar() {
  const session = await getCurrentUser()

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
						<Link
							href={link.href}
							key={link.key}
						>
							{link.text}
						</Link>
					))}
				</ul>
			</div>

			<div className="flex justify-center items-center gap-4">
				{session?.user ? (
					<>
						{/* <ProfileMenu session={session} /> */}

						<Link href="/create-project">Share Work</Link>

            {/* <button type="button" className="text-sm" onClick={signOut}>Sign Out</button> */}
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</nav>
	)
}
