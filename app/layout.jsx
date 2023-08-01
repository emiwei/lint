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
        <div className='h-full bg-gray-700 pb-8'>
          <div className='flex flex-col main'>
            <Navbar/>
            <div className='pl-8 pr-8'>
              {children}
            </div>
          </div>
        </div>
      </Provider>
      </body>
    </html>
  )
}
