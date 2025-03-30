import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lexend } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"

const primary = Poppins({
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

const secondry = Lexend({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese", "latin-ext"],
})

export const metadata: Metadata = {
  title: "MyUni - Modern University Platform",
  description: "Empowering students with a modern, integrated university experience",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primary.className} ${secondry.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

