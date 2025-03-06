import 'modern-normalize/modern-normalize.css'
import '../styles/base.scss'

export const metadata = {
  metadataBase: new URL('https://irfanu.com'),
  title: {
    default: 'Irfan Uraizee: Designer and developer',
  },
  description: 'Combining design and programming to build interactive experiences',
  authors: [{ name: 'Irfan Uraizee' }],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://irfanu.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
