import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import {Navbar} from "@/components/navbar/navbar";
import {INavLink} from "@/models/navlink";
import {ISocialMedium} from "@/models/social-medium";
import {Layout} from "@/components/layout/layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dpliakos',
  description: 'Software Engineer Specializing in Product Development',
}

const links: INavLink[] = [
  {
    href: '/',
    label: 'About',
  },
  {
    href: '/experience',
    label: 'Experience',
  },
  {
    href: '/community',
    label: 'Community',
  },
  // {
  //   href: '/contact',
  //   label: 'Contact',
  // }
];

const socialMedium: ISocialMedium[] = [
  {
    href: 'https://gitlab.com/dpliakos',
    name: 'gitlab',
    label: 'Gitlab',
  },
  {
    href: 'https://gihub.com/dpliakos',
    name: 'github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/dpliakos/',
    name: 'linkedIn',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/Dimitris_Pl',
    name: 'twitter',
    label: 'Twitter',
  },
  {
    href: 'mailto:dimitrispl96@gmail.com',
    name: 'mail',
    label: 'eMail',
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-cols-3 h-screen w-full`}>
        <header className="col col-span-1 header">
          <Navbar pages={links} socialMedia={socialMedium} />
        </header>
        <main className="col col-span-2 h-full">
          <Layout>
            {children}
          </Layout>
        </main>
      </body>
    </html>
  )
}
