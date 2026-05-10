'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SearchIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchOverlayStore } from '@/store/useSearchOverlayStore'
import Image from 'next/image'
import { categoriesData } from '@/lib/constants'



export default function SearchOverlay() {
  
  const pathname = usePathname()
  const { isOpen, toggleOverlay, setIsOpen } = useSearchOverlayStore()

  const pathSegment = pathname.split('/')[1]; 
  const isMenOrChild = pathSegment === 'men' || pathSegment === 'child';
  const currentGender = isMenOrChild ? pathSegment : 'women';

  const categories = categoriesData[currentGender];

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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              
              {categories.map((cat) => {
                const targetHref = `/${currentGender}/${cat.slug}`;

                return (
                  <Link
                    key={cat.slug}
                    href={targetHref}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row p-4 text-sm text-start items-center justify-start text-gray-900"
                  >
                    <div className="relative w-12 h-12 mr-4">
                      <Image 
                        src={cat.image} 
                        alt={cat.title}
                        fill // สั่งให้รูปขยายเต็ม div ตัวแม่ (w-24 h-24)
                        className="object-contain" // ป้องกันรูปเบี้ยว ให้มันย่อขยายตามสัดส่วนจริง
                      />
                    </div>
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