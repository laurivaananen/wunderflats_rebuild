import React, { useState } from 'react';

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="h-16 lg:h-24 bg-white relative">
      <div className="h-full flex items-center justify-between">
        <div className="ml-6">
          <a href="#" className="text-purple-dark text-lg no-underline tracking-wide">REALESTATE</a>
        </div>
        <div className={"lg:visible z-10 lg:mr-6 " + (active ? ' w-270 visible flex flex-col fixed pin-r pin-t bg-grey-lighter mr-0 h-screen pt-16 px-8' : ' invisible')}>
          <div className={"inline" + (active ? ' flex flex-col bg-white rounded-lg ' : '')}>
            <a href="#" className={(active ? 'py-4 px-8 border-b  border-grey-lighter ' : '') + "text-grey-darkest no-underline text-sm"}>Become a landlord</a>
            <a href="#" className={(active ? 'py-4 px-8 border-b  border-grey-lighter ' : '') + "text-grey-darkest no-underline text-sm lg:ml-6 pr-6 lg:border-r-2 lg:py-1"}>Help</a>
            <a href="#" className={(active ? 'py-4 px-8 ' : '') + "text-grey-darkest no-underline text-sm lg:px-6 lg:border-r-2 lg:py-1"}>🕽 +12 34 567 890</a>
          </div>
          <div className={(active ? 'flex flex-col bg-white rounded-lg mt-8 ' : '') + "inline lg:ml-6"}>
            <a href="#" className={(active ? 'py-4 px-8 border-b  border-grey-lighter ' : '') + "font-bold text-grey-darkest no-underline text-sm"}>Login</a>
            <span className={(active ? 'invisible absolute ' : '' ) + "text-grey-darkest text-sm"}> / </span>
            <a href="#" className={(active ? 'py-4 px-8 ' : '') + "font-bold text-grey-darkest no-underline text-sm"}>Sign Up</a>
          </div>
        </div>
        <button onClick={() => setActive(!active)} className="z-20 visible lg:invisible lg:absolute mr-6 text-3xl font-bold">{active ? '⨯' : '𝄘'}</button>
      </div>
    </nav>
  )
}

export default Navigation;