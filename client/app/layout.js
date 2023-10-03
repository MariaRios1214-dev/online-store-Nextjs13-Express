import Nabvar from '@/components/Navbar'
import '../styles/globals.scss'
import { Roboto } from 'next/font/google'

const font = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Tienda Online',
  description: 'Aplicativo con fines comerciales, pra distribución de productos en linea'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Mercado Libre - Productos</title>
        <link rel='icon' type='image/png' href='https://http2.mlstatic.com/ui/navigation/3.0.8/mercadolibre/120x120-precomposed.png' sizes='120x120' />
      </head>
      <body className={font.className}>
        <Nabvar />
        {children}
      </body>
    </html>
  )
}
