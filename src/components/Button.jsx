import React from 'react'

const Button = ({children,clickHandler,type,disabled}) => {
  return (
    <button onClick={clickHandler} type={type} disabled={disabled} className='bg-[#D7A477] text-white px-12 py-4 font-semibold hover:bg-white hover:text-black transition ease-in-out duration-700'>
        {children}
    </button>
  )
}

export default Button