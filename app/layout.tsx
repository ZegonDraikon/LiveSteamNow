import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Gamehub',
	description: 'Fullstack Twitch Clone'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang='en'>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						forcedTheme='dark'
						storageKey='gamehub-theme'
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
