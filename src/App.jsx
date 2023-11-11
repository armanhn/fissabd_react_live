import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"

import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import CorporateInternet from './components/CorporateInternet'
import HomeInternet from './components/HomeInternet'
import BandwidthReseller from './components/BandwidthResller'
import PaymentBkash from './components/PaymentBkash'
import PaymentRocket from './components/PaymentRocket'

export default function App() {
  return (
  <>
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/corporate-internet" element={<CorporateInternet />}/>
          <Route path="/home-internet" element={<HomeInternet />}/>
          <Route path="/bandwidth-internet" element={<BandwidthReseller />}/>
          <Route path="/bkash" element={<PaymentBkash />}/>
          <Route path="/rocket" element={<PaymentRocket />}/>

        </Routes>
      </Router>
    </div>
  </>
  )
}
