'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SearchIcon, XIcon } from 'lucide-react'

export default function SearchOverlay() {
  
  const pathname = usePathname()

  const currentGender = pathname === '/' ? 'women' : pathname.replace('/', '')

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    
    const handleHashChange = () => {
      const hash = window.location.hash   // e.g. '#men'
      setIsOpen(hash === '#women' || hash === '#men' || hash === '#child')
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)

  }, [])

  const toggleOverlay = () => {
    // Add #<gender> or remove #<gender> at the end of url 
    if (isOpen) {
      // กรณีจะปิด: ลบ Hash ออกให้เหลือแค่ pathname เปล่าๆ 
      // (ใช้ history.pushState จะลบ Hash ได้เนียนโดยที่หน้าเว็บไม่รีเฟรชหรือกระตุก)
      window.history.pushState(null, '', pathname)
      setIsOpen(false)
    } else {
      window.location.hash = currentGender
    }

  }

  return (
    <>
      <button 
        onClick={toggleOverlay}
        className="bg-white text-gray-900 p-5 rounded-full fixed bottom-6 left-1/2 -translate-x-1/2 z-20 shadow-2xl cursor-pointer"
      >
        <SearchIcon size={28}/>
      </button>


      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col">
          

          <button 
            onClick={toggleOverlay}
            className="bg-black text-white p-5 rounded-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-2xl cursor-pointer"
          >
            <XIcon size={28}/>
          </button>
        </div>
      )}
    </>


  )

}