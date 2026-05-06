import { Banner } from '@/services/api/product'

export default function BannerItem({ data }: { data: Banner}) {

  const banner: Banner = data

  return (
    <div className="snap-start w-full h-screen relative bg-gray-900 shrink-0">
      <img 
        src={banner.image}
        alt="Hero Banner"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start lg:pb-60 pb-38 md:pb-44 p-18 md:p-24 lg:p-32 text-white max-w-xl">
        <h2 className="text-2xl font-bold uppercase tracking-widest">{data.title}</h2>
        <div className="my-4 text-2xl tracking-wide whitespace-pre-line">{data.description}</div>
        <div className='flex flex-row justify-end items-end gap-2 font-semibold'>
          <div className='flex text-4xl text-red-600'>{data.priceInfo?.price} บาท</div>
          <span className='line-through'>{data.priceInfo?.originalPrice} บาท</span>
        </div>
        <div>{data.additionalText}</div>
      </div>
    </div>

  )

}