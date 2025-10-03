import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Vimnav.spoon - System-wide Vim Navigation for macOS | Hammerspoon Vim Keybindings",
  description:
    "Navigate any macOS application with Vim-like keybindings using Hammerspoon. System-wide Vim navigation for Safari, Mail, Finder, and all native macOS apps. Think Vimium, but for your entire desktop. Free and open source.",
  keywords: [
    "macos systemwide vim",
    "vim navigation macos",
    "hammerspoon vim",
    "vim keybindings macos",
    "system-wide vim navigation",
    "macos vim shortcuts",
    "vimium macos",
    "keyboard navigation macos",
    "vim modal editing macos",
    "hammerspoon spoon",
  ],
  authors: [{ name: "y3owk1n" }],
  creator: "y3owk1n",
  publisher: "y3owk1n",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vimnav.vercel.app",
    title: "Vimnav.spoon - System-wide Vim Navigation for macOS",
    description:
      "Navigate any macOS application with Vim-like keybindings using Hammerspoon. System-wide Vim navigation for your entire desktop.",
    siteName: "Vimnav.spoon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimnav.spoon - System-wide Vim Navigation for macOS",
    description:
      "Navigate any macOS application with Vim-like keybindings using Hammerspoon. Think Vimium, but for your entire desktop.",
    creator: "@y3owk1n",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
