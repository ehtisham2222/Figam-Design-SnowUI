import React from 'react'
import top1 from '../../assets/images/top1.svg';
import top2 from '../../assets/images/top2.svg';
import serch from '../../assets/images/search.svg';
import sun from '../../assets/images/sun.svg';
import time from '../../assets/images/time.svg';
import bell from '../../assets/images/bell.svg';
function Header() {
  return (
    /*navigation bar*/
    <div className= ' max-w-full  h-[40px]  rounded-[1px] flex justify-between opacity-100 '>
           {/*left side*/}
             <div className='w-[332px] h-[40px] flex  opacity-100'>
                <div className='mt-[8px] mb-[8px] ml-[16px] flex gap-[12px]'>
              <img src={top1} alt='' className='h-[20px] w-[20px]'/>
              <img src={top2} alt='' className='h-[20px] w-[20px]'/>
              <p className='text-black/40 mb-[2px]'>Dashboards</p>
              <p className='text-black/40'>/</p>
              <p className='text-black'>Oveview</p>
             </div>
             </div>
              {/*right side*/}
              <div className='w-[315px] h-[40px] flex gap-[16px] opacity-100 '>
                  {/*serchbar*/}
                     <div className='w-[160px] h-[36px] rounded-[12px]  bg-[#E5E5E6] flex justify-center mt-[4px]'>
                                           
                                  <div className='mt-[2px] flex '>
                                  <button className='cursor-pointer'><img src={serch} alt=''className='h-4 w-4'/></button>      
                                    <input type='text' placeholder='Search' className='bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex w-[47px] h-[20px] mt-[6px] ml-[4px]'/>
                                     <span className="text-gray-400 text-sm w-[20px] h-[16px] rounded-[4px] opacity-100 border-[0.5px] pl-2 pr-2 pb-4 ml-10 mt-[8px]">
                                                                                           /
                                                        </span>
                                              </div></div>         
                                               {/*icons*/}
                                               <div className='w-[128px] h-[40px] rounded-[8px] flex items-center justify-center gap-[4px] '>
                                                   <div className='h-[20px] w-[20px] flex gap-[15px] justify-center'>
                                                    <img src={sun} className='h-[19px] w-[19px]'/>
                                                     <img src={time} className='h-[19px] w-[19px]'/>
                                                      <img src={bell} className='h-[19px] w-[19px]' />
                                                   </div>
                                               </div>
              </div>
    </div>

  )
}

export default Header