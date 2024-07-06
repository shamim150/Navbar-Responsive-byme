import React from 'react'
import { Link } from 'react-router-dom'

export const Li = ({alo, className,to}) => {
  return (
    <div>
        <li>
        <Link to={to} className={` hover:text-primary transition-all duration-500 font-bold text-sm font-DM text-[#767676] ${className}`}>{alo} </Link>
        </li>
    </div>
  )
}
