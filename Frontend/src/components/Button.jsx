import React from 'react'

const Button = () => {
  return (
<div className='flex items-center justify-center flex-col'>
<h1 className='text-red-900 bg-black text-right text-2xl'>Button</h1>
<h2>fgntm</h2>
<div className='space-y-6  w-24'>
<input type='number' placeholder='Enter your name' className='border border-black '/>
<br />
<input type ='email' placeholder='email' className='border border-black'/><br/>
<input type ='password' placeholder='password' className='border border-black'/>
<button className='px-3 py-2 border '>Button</button>
</div>
</div>

   
   
  )
}

export default Button
