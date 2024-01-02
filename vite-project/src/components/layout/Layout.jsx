import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import myContext from '../../context/data/myContext'


function Layout({children}) {
   
  return (
    <div>
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout