'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useRef } from 'react'
import Link from 'next/link'

export default function Header() {

  const pathname = usePathname();
  const router = useRouter();

  // const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const handleHoverEnter = (path: string) => {
  //   if (pathname !== path) {
  //     hoverTimeoutRef.current = setTimeout(() => {
  //       router.push(path);
  //     }, 200);
  //   }
  // }

  // const handleHoverLeave = () => {
  //   // ถ้าเอาเมาส์ออกก่อน 400ms ให้ยกเลิกการเปลี่ยนหน้าทันที!
  //   if (hoverTimeoutRef.current) {
  //     clearTimeout(hoverTimeoutRef.current);
  //   }
  // }

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
            const isActive = pathname === item.path ? true : false;

            return (
              <Link 
                key={item.path}
                href={item.path} 
                // onMouseEnter={() => handleHoverEnter(item.path)}
                // onMouseLeave={() => handleHoverLeave()} // 👈 เพิ่ม onMouseLeave ตรงนี้
                className= {`font-semibold text-white pb-2 hover:text-black ${
                  isActive ? 'border-b-2' : ''
                }`}
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
