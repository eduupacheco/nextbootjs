import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/styles.css'

export const metadata = {
  title: 'NextBootJS',
  description: '',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
