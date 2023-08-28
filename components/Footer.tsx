import Image from 'next/image'
import React from 'react'
import logo from '@/public/cosmos-purple.svg'
import { footerLinks } from '@/constants'
import Link from 'next/link'

type ColumnProps = {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
	<div className="flex flex-1 flex-col gap-3 text-sm min-w-max">
		<h4 className="font-semibold">{title}</h4>
		<ul className="flex flex-col gap-2 font-normal">
      {
        links.map((link) => <Link href="/" key={link} >{link}</Link>)
      }
    </ul>
	</div>
)

export default function Footer() {
  return (
		<footer className="flex items-center justify-start flex-col py-6 px-5 lg:px-20 w-full gap-20 bg-light-white">
			<div className="flex flex-col gap-12 w-full">
				<div className="flex flex-col items-start">
					<Image
						src={logo}
						width={115}
						height={38}
						alt="Flexibble"
					/>

					<p className="text-start text-sm font-normal mt-5 max-w-xs">
						Flexibble is the world's leading community for creatives to share,
						grow, and get hired.
					</p>
				</div>
				<div className="flex flex-wrap gap-12">
					<FooterColumn
						title={footerLinks[0].title}
						links={footerLinks[0].links}
					/>

					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn
							title={footerLinks[1].title}
							links={footerLinks[1].links}
						/>
						<FooterColumn
							title={footerLinks[2].title}
							links={footerLinks[2].links}
						/>
					</div>

					<FooterColumn
						title={footerLinks[3].title}
						links={footerLinks[3].links}
					/>

					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn
							title={footerLinks[4].title}
							links={footerLinks[4].links}
						/>
						<FooterColumn
							title={footerLinks[5].title}
							links={footerLinks[5].links}
						/>
					</div>

					<FooterColumn
						title={footerLinks[6].title}
						links={footerLinks[6].links}
					/>
				</div>
			</div>

      <div>
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects submitted
        </p>
      </div>
		</footer>
	)
}
