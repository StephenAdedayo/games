import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Truth from './pages/Truth'
import Dare from './pages/Dare'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>


    <Navbar />
    <main className='min-h-screen'>

      
 <Routes>
<Route path='/' element={<Home />}/>
<Route path='/truth' element={<Truth />}/>
<Route path='/dare' element={<Dare />}/>



 </Routes>
 </main>
<Footer />


    </>
  )
}

export default App
