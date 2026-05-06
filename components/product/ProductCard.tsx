
import { Product } from '@/services/api/product'
import Link from 'next/link'
import { Star } from 'lucide-react';


interface ProductCardProps {
  data: Product

}

export default function ProductCard({ data }: ProductCardProps) {

  const product: Product = data

  return (
    <Link 
      href={`product/${product.id}`}
      className="border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-shadow bg-white"
    >
      <div className="h-48 mb-4 flex justify-center items-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-glow">
        <h2 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h2>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">
            {product.price}
          </span>
          <div className="flex flex-row gap-1 ">
            <span className="flex flex-row gap-1 justify-center items-center text-sm font-bold text-gray-800">
              {product.rating.rate} 
              <Star 
                color="black"
                fill="black"
                size={16} 
                strokeWidth={1} 
              />
            </span>
            <span className="text-sm font-sm text-gray-400">
              ({product.rating.count})
            </span>
          </div>
          
        </div>
      </div>
    </Link>

  )

}