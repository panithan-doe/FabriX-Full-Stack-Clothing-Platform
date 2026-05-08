'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SearchIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchOverlayStore } from '@/store/useSearchOverlayStore'

export default function SearchOverlay() {
  
  const pathname = usePathname()
  const currentGender = pathname === '/' ? 'women' : pathname.replace('/', '')
  const { isOpen, toggleOverlay, setIsOpen } = useSearchOverlayStore()


  const categories = [
    { slug: 'tops', title: 'เสื้อทั่วไป' },
    { slug: 'bottoms', title: 'กางเกง' },
    { slug: 'outerwear', title: 'เสื้อตัวนอก' },
  ]

  return (
    <>
      <button 
        onClick={toggleOverlay}
        className={`
          ${isOpen ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
          p-5 rounded-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-2xl cursor-pointer
        `}>
        {isOpen ?
          <XIcon 
            size={28}
          /> : 
          <SearchIcon 
            size={28}
          />}
        
      </button>


      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col">
          
          <div className="max-w-5xl mx-auto w-full pt-32 px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat) => {
                // 💡 การคำนวณ Path ที่ถูกต้องและเป็น Absolute Path (ใส่ / นำหน้าเสมอ)
                // - ถ้าเป็น women -> /tops
                // - ถ้าเป็น men -> /men/tops
                const targetHref = currentGender === 'women' 
                  ? `/${cat.slug}` 
                  : `/${currentGender}/${cat.slug}`;

                return (
                  <Link
                    key={cat.slug}
                    href={targetHref} // 👈 ใช้ Path ที่คำนวณมาอย่างแม่นยำ
                    onClick={() => setIsOpen(false)}
                    className="block p-8 bg-gray-50 hover:bg-gray-100 text-xl font-semibold rounded-xl text-center border"
                  >
                    {cat.title}
                  </Link>
                )
              })}
            </div>
          </div>

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