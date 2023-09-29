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
import {resetScale} from "@/components/utils/reset-scale/utils";
import {ResetScaleOverlay} from "@/components/reset-scale-overlay/reset-scale-overlay";

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
      <body className={`${inter.className} mid:grid mid:grid-cols-3 h-screen w-full`}>
        <header className="header mid:col mid:col-span-1 ">
          <MobileNavBar />
          <div className="header__inner">
            <Navbar pages={navigationLinks} socialMedia={socialMedia} />
          </div>
        </header>
        <main className="col col-span-2 min-h-full main">
          <ResetScaleOverlay />
          <Layout>
            {children}
          </Layout>
        </main>
      </body>
    </html>
  )
}
