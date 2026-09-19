import Sidebar from '../components/Sidebar'
import './globals.css'

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="fa" dir="rtl"><body><Sidebar/><main className="main">{children}</main></body></html>
}
