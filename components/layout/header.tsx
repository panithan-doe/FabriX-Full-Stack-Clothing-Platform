'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchOverlayStore } from '@/store/useSearchOverlayStore'

export default function Header() {

  const pathname = usePathname();

  const { isOpen } = useSearchOverlayStore()
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState('')

  const menus = [
    // { name: 'collection', path: '/', submenu: true },
    { name: 'women', path: '/' },
    { name: 'men', path: '/men' },
    { name: 'child', path: '/child' },
  ]
  
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <nav aria-label="Global" className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {menus.map((item) => {
            // const isActive = pathname === item.path ? true : false;

            const isActive = isOverlayOpen 
              ? currentHash === `#${item.name}` 
              : pathname === item.path;
            
            // const textColor = isOverlayOpen? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-900'

            
            let textColor = '';
            let borderColor = 'border-transparent'; // สีเส้นใต้เริ่มต้น (โปร่งใส)
  
            if (isOpen) {
              textColor = isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700';
              borderColor = isActive ? 'border-gray-900' : 'border-transparent';
            } else {
              textColor = isActive ? 'text-white' : 'text-white hover:text-white';
              borderColor = isActive ? 'border-white' : 'border-transparent';
            }


            return (
              <Link 
                key={item.path}
                href={item.path} 
                // onMouseEnter={() => handleHoverEnter(item.path)}
                // onMouseLeave={() => handleHoverLeave()} // 👈 เพิ่ม onMouseLeave ตรงนี้
                className={`font-semibold pb-2 border-b-2 transition-colors duration-200 ${borderColor} ${textColor}`}
                >
                  {item.name.toUpperCase()}
              </Link>
          )})}
          
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
