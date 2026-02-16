import React from 'react'
import snow from '../../assets/images/SnowUI Logo.svg';
import i1 from '../../assets/images/i1.svg';
import i2 from '../../assets/images/i2.svg';
import i3 from '../../assets/images/i3.svg';
import i4 from '../../assets/images/i4.svg';
import i5 from '../../assets/images/i5.svg';
import i6 from '../../assets/images/i6.svg';
import i7 from '../../assets/images/i7.svg';
import i8 from '../../assets/images/i8.svg';
import icon11 from '../../assets/images/icon11.svg';
function SideBar() {
  return (
    <div className='h-screen w-[220px] gap-[8px] overflow-auto'>
           {/*frame*/}
           <div className='w-[188px] h-[496px] gap-[8px] mt-[16px] ml-[16px] mr-[16px]'>
                 {/*icon*/}
                  <div className='w-[188px] h-[48px] pt-[4px] pr-[12px] pb-[12px] pl-[12px] '>
                      <div className='w-[119px] h-[32px] gap-[7px] mt-[4px] ml-[12px] mr-[57px] mb-[12px]'>
                        <img src={snow} />  
                      </div>
                  </div>
                  {/*overview*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex  mt-[8px] transition-transform duration-200 ease-in-out hover:scale-90 hover:bg-blue-100 cursor-pointer'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px]  transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i1}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Overview</p>
                      </div>
                  </div>
                   {/*ecommerace*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex  mt-[8px] transition-transform duration-200 ease-in-out hover:scale-90 hover:bg-blue-100 cursor-pointer'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i2}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>eCommerace</p>
                      </div>
                  </div>
                   {/*projects*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer  hover:bg-blue-100 mt-[8px]'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i3}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Projects</p>
                      </div>
                  </div>
                   {/*user profile*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer  hover:bg-blue-100 mt-[8px]'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i4}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>User Profile</p>
                      </div>
                  </div>
                   {/*account*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex  mt-[8px] transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer  hover:bg-blue-100'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i5}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Account</p>
                      </div>
                  </div>
                   {/*corporate*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex  mt-[8px] transition-transform duration-200 ease-in-out hover:scale-90 cursor-pointer  hover:bg-blue-100'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i6}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Corporate</p>
                      </div>
                  </div>
                   {/*blog*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex transition-transform duration-200 ease-in-out hover:scale-90 mt-[8px] cursor-pointer  hover:bg-blue-100'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90 '>
                       <img src={i7}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[10px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Blog</p>
                      </div>
                  </div>
                   {/*social*/}
                  <div className='w-[188px] h-[48px] rounded-[16px]  gap-[8px]  text-[16px] flex transition-transform duration-200 ease-in-out hover:scale-90 mt-[8px] cursor-pointer  hover:bg-blue-100'>
                      {/*icon*/}
                      <div className='w-[24px] h-[24px] rounded-[12px] mt-[12px] ml-[12px] mb-[12px] transition-transform duration-200 ease-in-out hover:scale-90'>
                       <img src={i8}/>
                      </div>
                       {/*text*/}
                      <div className='w-[128px] h-[20px] rounded-[12px] mt-[11px] ml-[2px] mb-[14px] mr-[12px]  text-left'>
                       <p>Social</p>
                      </div>
                  </div>
           </div>
            {/*frame2*/}
             <div className='w-[188px] h-[56px] rounded-[20px]  gap-[12px] mt-[200px] ml-[16px] mb-[19px] mr-[16px]  flex'>
               <img src={icon11} alt='' className='h-[32px] w-[32px] rounded-[80px] ml-[16px] mt-[16px] mb-[16px]'/>
                <div className='w-[112px] h-[20px] rounded-[12px] opacity-100 mt-[22px] ml-[1px] mb-[2px] text-left '>
                    <p>ByeWind</p>
                </div>
             </div>
      
    </div>
  )
}

export default SideBar