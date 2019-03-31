import React, { Component } from 'react';
import apt_1 from './img/apt_1.jpg';
import apt_2 from './img/apt_2.jpg';

const App = () => {
  return (
    <>
      <Navigation />
      <Image />
      <Header />
    </>
  )
}

const Navigation = () => (
  <nav className="flex h-24 bg-white items-center justify-between">
    <div className="ml-6">
      <a href="#" className="text-purple-dark text-lg no-underline tracking-wide">REALESTATE</a>
    </div>
    <div className="mr-6">
      <a href="#" className="text-grey-darkest no-underline text-sm">Become a landlord</a>
      <a href="#" className="text-grey-darkest no-underline text-sm ml-6 pr-6 border-r-2 py-1">Help</a>
      <a href="#" className="text-grey-darkest no-underline text-sm px-6 border-r-2 py-1">🕽 +12 34 567 890</a>
      <div className="inline ml-6">
        <a href="#" className="font-bold text-grey-darkest no-underline text-sm">Login</a>
        <span className="text-grey-darkest text-sm"> / </span>
        <a href="#" className="font-bold text-grey-darkest no-underline text-sm">Sign Up</a>
      </div>
    </div>
  </nav>
)

const Image = () => {
  return (
    <header
      style={{ backgroundImage: `url(${apt_2})`}}
      className="bg-red h-header bg-center bg-cover w-full">
    </header>
  )
}

const Header = () => (
  <article style={{paddingRight: "270px"}} className="w-full xl:w-1200px px-6 mx-auto relative">
    <span style={{top: "-0.5rem"}} className="relative bg-purple-darker text-purple-lighter rounded-full py-2 px-4 text-base">
      <span className="font-bold text-purple-lightest">1990 €</span> / month
    </span>
    <h1
      className="font-bold my-8 text-5xl antialiased"
    >Living in the district at Checkpoint Charlie, 6th floor, elevator, terrace & balcony for rent
    </h1>
    <p>
      <span>95 m2</span>
      <span>, Floor: 6</span>
      <span className="text-grey-dark ml-2"> Berlin</span>
    </p>
    <div className="my-8">
      <span className="rooms icon">3.5 Rooms</span>
      <span className="door icon">40 sqm</span>
      <span className="people icon">2 People</span>
      <span className="calendar icon">6 Months</span>
    </div>
    <hr className="border-b mb-8"/>
    <section className="text-base leading-loose antialised">
      <h3 className="text-2xl mb-12">About this listing</h3>
      <p>
      Very well cut and bright 3 rooms apartment, for rent in best location of Berlin
      </p>
      <p>
      Checkpoint Charlie was one of Berlin's border crossings through the Berlin Wall between 1961 and 1990, connecting the Soviet and American sectors in Friedrichstrasse between Zimmerstrasse and Kochstrasse, thus linking the East Berlin district of Mitte with the West Berlin district of Kreuzberg.
      </p>
      <p>
      The infrastructure is very good, subway and bus are right in front of the door.
      </p>
      <p>
      Gendarmenmarkt, a public square surrounded by impressive architecture with Christmas market and ice rink in winter.
      </p>
      <p>
      Der Checkpoint Charlie war einer der Berliner Grenzübergänge durch die Berliner Mauer zwischen 1961 und 1990. Er verband in der Friedrichstraße zwischen Zimmerstraße und Kochstraße den sowjetischen mit dem US-amerikanischen Sektor und damit den Ost-Berliner Bezirk Mitte mit dem West-Berliner Bezirk Kreuzberg. 
      </p>
    </section>
    <hr className="border-b my-12 border-grey-lighter"/>
    <section>
      <h3 className="text-2xl mb-12">Services</h3>
      <div className="flex items-center">
        <span className="text-green mr-2 text-2xl">🗹</span>
        <span className="mr-8">Parking</span>
        <span className="text-green mr-2 text-2xl">🗹</span>
        <span>Garage</span>
      </div>
    </section>
    <hr className="border-b my-12 border-grey-lighter"/>
    <section>
      <h3 className="text-2xl mb-12">Amenities</h3>
      <div className="flex">
        <ul className="flex flex-col list-reset">
          <li>
            <h4 className="text-xl mb-4">General</h4>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Elevator</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Accessible</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Balcony</span>
          </li>
        </ul>
        <ul className="flex flex-col list-reset">
          <li>
            <h4 className="text-xl mb-4">Kitchen</h4>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Elevator</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Accessible</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Balcony</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Accessible</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Balcony</span>
          </li>
        </ul>
        <ul className="flex flex-col list-reset">
          <li>
            <h4 className="text-xl mb-4">Bathroom</h4>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Elevator</span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-green mr-2 text-2xl">🗹</span>
            <span className="mr-8">Accessible</span>
          </li>
        </ul>
      </div>
    </section>
    <hr className="border-b my-12 border-grey-lighter"/>
    <section>
      <h3 className="text-2xl mb-12">Availability</h3>
      <ul className="list-reset border-grey-lighter border">
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b border-r inline-block">Jan 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b border-r inline-block">Feb 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b border-r inline-block">Mar 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b border-r inline-block">Apr 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b border-r inline-block">May 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-b inline-block">Jun 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-r inline-block">Jul 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-r inline-block">Aug 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-r inline-block">Sep 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-r inline-block">Oct 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter border-r inline-block">Nov 2019</li>
        <li className="h-32 text-center pt-24 available relative w-1/6 border-grey-lighter  inline-block">Dec 2019</li>
      </ul>
    </section>
    <hr className="border-b my-12 border-grey-lighter"/>
    <div style={{bottom: "100%", width: "270px"}} className="rounded-t-lg p-8 absolute pin-r bg-white">
      <form action="POST" className="flex flex-col items-center">
        <h3 className="mb-6 text-base">New booking request</h3>
        <input type="text" placeholder="From" className="mb-4 rounded-sm border-2 border-grey-lighter p-3 w-full"/>
        <input type="text" placeholder="To" className="mb-4 rounded-sm border-2 border-grey-lighter p-3 w-full"/>
        <input type="button" className="mb-4 bg-green rounded-full p-3 w-full text-white font-bold" value="Request to book" />
        <span className="text-grey text-sm">You won't be charged yet</span>
      </form>
    </div>
    <div style={{width: "270px"}} className="flex flex-col items-center bg-grey-light absolute pin-t pin-r p-8 rounded-b-lg">
      <h3 className="mb-6 text-base">Your contact person</h3>
      <p className="mb-6">Lauri Väänänen</p>
      <button className="font-bold text-sm px-4 py-2 border-grey w-full border-2 rounded-full">Questions?</button>
    </div>
  </article>
)

export default App;
