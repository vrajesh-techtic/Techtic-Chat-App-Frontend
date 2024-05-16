import React from 'react'
import { Link } from 'react-router-dom'
import WithAuth from '../routerProtector/WithAuth'

const PageNotFound = () => {
  return (
    <div className='mt-[10%] text-center'>
      <h1 className='text-2xl font-bold text-slate-500'>Looking for something?</h1>
      <h4 className='text-lg font-semibold text-zinc-600'>We're sorry. The Web address you entered is not a functioning page on our site.</h4>
      <Link to={"/"} className='font-bold underline text-blue-600'>Back to Home Page</Link>
    </div>
  )
}

export default WithAuth(PageNotFound)
