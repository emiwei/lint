// import '@styles/globals.css';
import Navbar from '@/components/navbar';
import Provider from '@/components/Provider';
import '@/styles/globals.css';

export const metadata = {
  title: 'Personal Expense Tracker',
  description: 'Basically all the features of mint but for free',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <Provider>
        <Navbar/>
        {children}
      </Provider>
      </body>
    </html>
  )
}
