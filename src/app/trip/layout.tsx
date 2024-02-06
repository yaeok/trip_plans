import Header from '@/components/layout/header.component'
import Main from '@/components/layout/main.component'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}
