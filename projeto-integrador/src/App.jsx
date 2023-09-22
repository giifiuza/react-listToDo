import { useState } from 'react'
import './App.css'
import Logo from './assets/img/logo.png'
import Spline from '@splinetool/react-spline';

function App() {
  const stats = [
    { id: 1, name: 'Alpha bank’s users from all over the globe', value: '214K' },
    { id: 2, name: 'Alpha bank’s revenue in 2022 the first quarter', value: '430M' },
    { id: 3, name: 'Alpha bank’s invest growth in 2022', value: '278%' },
  ]

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return (
    <>
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                style={{width: 100, height: 50}}
                alt=""
              />
            </a>
          </div>
        </nav>
      </header>
    </div>
    <Spline scene="https://prod.spline.design/kx1tED1x-PbAV4if/scene.splinecode" />
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-100">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </>
    
  )
}

export default App
