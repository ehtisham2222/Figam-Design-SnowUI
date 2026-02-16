
import './App.css'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import Main from './components/layout/main'

import SideBar from './components/layout/sideBar'

function App() {
  return (
    <div className="flex h-screen bg-[#F3F0FF]">
      
      {/* Sidebar (DON'T TOUCH — keep as is) */}
      <div className=" bg-[#F3F0FF]">
        <SideBar />
      </div>

      {/* Main Section */}
      <div className="flex flex-col  flex-1 bg-[#F3F0FF]">
        
        <Header />

        {/* THIS is the only scroll container */}
        <div className="flex-1 overflow-y-auto">
          <Main />
          <Footer />
        </div>

      </div>
    </div>
  )
}


  



export default App
