import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Navbar} from "@/components/navbar/navbar";
import {Layout} from "@/components/layout/layout";
import {navigationLinks} from "@/content/navigation-links";
import {socialMedia} from "@/content/social-media";
import './globals.css'
import {MobileNavBar} from "@/components/navbar/mobile-nav-bar";
import {ResetScale} from "@/components/utils/reset-scale/reset-scale";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dpliakos',
  description: 'Software Engineer Specializing in Product Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:grid md:grid-cols-3 h-screen w-full`}>
        <header className="header">
          <MobileNavBar />
          <div className="col col-span-1 header__inner">
            <Navbar pages={navigationLinks} socialMedia={socialMedia} />
          </div>
        </header>
        <main className="col col-span-2 h-full main">
          <Layout>
            {children}
          </Layout>
        </main>
      </body>
    </html>
  )
}
