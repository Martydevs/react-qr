import { PropsWithChildren } from 'react'

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950">
      { children }
    </main>
  )
}

export default RootLayout