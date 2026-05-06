
import Header from '@/components/layout/header'
// import Footer from '@/components/layout/footer'
import SearchOverlay from '@/components/section/SearchOverlay'

export default function ShopLayout({children} : {children: React.ReactNode}) {

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header/>

      <main className="grow w-full relative overflow-x-hidden h-screen">        
        {children}
      </main>

      < SearchOverlay />

      {/* <Footer/> */}
    </div>
  )

}