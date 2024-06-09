import React from 'react'

const Navbar = () => {
  return (
    <ul className='border border-gray-200 w-screen lg:w-1/5 text-gray-800 p-6 pt-8  h-max grow flex flex-col gap-10'>
        <li className='flex gap-8 font-semibold'>
            <img src="images/dash.svg" alt="dashborad" />
            <p>Dashborad</p>
        </li>
        <li className='flex gap-8 font-semibold'>
            <img src="images/badge.svg" alt="skill test" />
            <p>Skill Test</p>
        </li>
        <li className='flex gap-8 font-semibold'>
            <img src="images/paper.svg" alt="internship" />
            <p>Internship</p>
        </li>
    </ul>
  )
}

export default Navbar
