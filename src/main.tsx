import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import RoomListing from './pages/RoomListing.tsx'
import RoomLooking from './pages/RoomLooking.tsx'
import Login from './pages/Login.tsx'
import RoomDetails from './pages/RoomDetails.tsx'
import Listing2 from './pages/Listing2.tsx'
import Listing3 from './pages/Listing3.tsx'
import Listing4 from './pages/Listing4.tsx'
import Listing5 from './pages/Listing5.tsx'
import Learn from './pages/Learn.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/roomlisting' element={<RoomListing/>}/>
  <Route path='/roomlook' element={<RoomLooking/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/roommate' element={<RoomDetails/>}/>
  <Route path='/listing2' element={<Listing2/>}/>
  <Route path='/listing3' element={<Listing3/>}/>
  <Route path='/listing4' element={<Listing4/>}/>
  <Route path='/listing5' element={<Listing5/>}/>
  <Route path='/help' element={<Learn/>}/>
  </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
