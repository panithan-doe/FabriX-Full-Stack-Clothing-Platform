// // components/layout/SwipeHandler.tsx
// 'use client'

// import { useEffect, useRef } from 'react';
// import { useRouter, usePathname } from 'next/navigation';

// const PAGE_ORDER = ['/', '/men', '/child'];

// export default function SwipeHandler() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const isNavigating = useRef(false);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       // ตรวจจับแค่การเลื่อนซ้าย/ขวา บน Trackpad เท่านั้น
//       // ถ้า deltaX มากกว่า deltaY แสดงว่าเป็นการเลื่อนแนวนอน
//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 40 && !isNavigating.current) {
        
//         const currentIndex = PAGE_ORDER.indexOf(pathname);
//         let nextIndex = currentIndex;

//         // เลื่อนขวา (นิ้วปัดไปซ้าย) -> ไปหน้าถัดไป
//         if (e.deltaX > 0 && currentIndex < PAGE_ORDER.length - 1) {
//           nextIndex++;
//         } 
//         // เลื่อนซ้าย (นิ้วปัดไปขวา) -> ไปหน้าก่อนหน้า
//         else if (e.deltaX < 0 && currentIndex > 0) {
//           nextIndex--;
//         }

//         if (nextIndex !== currentIndex) {
//           isNavigating.current = true;
//           router.push(PAGE_ORDER[nextIndex]);
          
//           // ล็อคไม่ให้เลื่อนรัวๆ
//           setTimeout(() => {
//             isNavigating.current = false;
//           }, 800);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: true });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [pathname, router]);

//   return null;
// }