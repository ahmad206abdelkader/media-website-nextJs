import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar/Topbar'
import Buttombar from '@/components/shared/Buttombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import { ClerkProvider } from '@clerk/nextjs'


//inter here like a css (font-family)
const inter = Inter({ subsets: ['latin'] })

//for title page name and desc
export const metadata: Metadata = {
  title: 'Wools',
  description: 'A Next.js 13 Wools Apllocations',
}

//root layout for jome page ~~> ./

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ClerkProvider>
        <Topbar />
        
        <main>
          <LeftSidebar />

           <section className='main-container'>

            <div className='w-full max-w-4xl'>
             {children}
            </div>

           </section>

          <RightSidebar />
        </main>

        <Buttombar />
        </ClerkProvider>

        </body>
    </html>
  )
}
