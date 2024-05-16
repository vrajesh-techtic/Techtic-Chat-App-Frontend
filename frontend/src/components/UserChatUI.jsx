import React from 'react'
import HomePage from './HomePage'
import CustomSider from './CustomSider'
import WithAuth from '../routerProtector/WithAuth'
import ChatLayout from '../pages/ChatLayout'
import CustomHeader from './CustomHeader'

const UserChatUI = () => {
  return (
    // <HomePage>
    <div className='!h-full flex flex-col'>
      <div className='h-fit'>
      <CustomHeader />
      </div>
      <div className='flex flex-row !h-[90%] items-end gap-5'>
        <CustomSider/>
        <ChatLayout/>
      </div>
    </div>
// </HomePage>
  )
}

export default WithAuth(UserChatUI)
