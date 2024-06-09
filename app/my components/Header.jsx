import React from 'react'

const Header = () => {
  return (
    <header className="bg-white flex justify-between p-5">
      <div className="logo sm:w-36 w-24 flex justify-center items-center">
        <img src="images/logo.png" alt="whatbytes" />
      </div>
      <div className="profile flex sm:gap-2 gap-1 sm:p-3 p-1 border-2 border-gray-400 rounded">
        <img
          className="rounded-full"
          width={"25px"}
          src="images/Aman photo professional.jpg"
          alt="profile"
        />
        <p className="font-bold text-black">Aman Kumar</p>
      </div>
    </header>
  )
}

export default Header
