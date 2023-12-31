import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import Navigation from '@/components/navigation'

const poppins = Poppins({ subsets:['latin'], weight: ["400", "500", "600", "700", "800", "900"]})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Navigation
          ></Navigation>
          {children}
        </Providers>
      </body>
    </html>
  );
}
