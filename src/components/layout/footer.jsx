import React from 'react'

function Footer() {
  return (
 <div className='w-[1070px] h-[56px] min-w-[800px] flex items-center justify-between opacity-100 mt-[16px]   mb-[16px] ml-[12px]'>

  {/* Left */}
  <div className="text-black/40 text-sm  ml-[25px]">
    <p>&copy; 2026 SnowUi</p>
  </div>

  {/* Right */}
  <div className='flex gap-[16px] text-black/40 text-sm mr-[10px] cursor-pointer'>
    <span>About</span>
    <span>Support</span>
    <span>Contact Us</span>
  </div>

</div>

  )
}

export default Footer