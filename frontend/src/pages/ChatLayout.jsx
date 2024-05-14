import React from 'react'
import HomePage from '../components/HomePage'
import WithAuth from '../routerProtector/WithAuth'
import { useSelector } from 'react-redux'

const ChatLayout = () => {

  
  return (
        <HomePage/>

        // </HomePage>
  )
}

export default WithAuth(ChatLayout)
