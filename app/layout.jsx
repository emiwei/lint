// import '@styles/globals.css';
import Navbar from '@/components/Navbar';
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
        <div className='h-screen bg-gray-700'>
          <div className='flex flex-col'>
            <Navbar/>
            <div className='pl-6 pr-6'>
              {children}
            </div>
            
          </div>
        </div>
      </Provider>
      </body>
    </html>
  )
}
