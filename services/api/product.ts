import { BASE_URL } from '../config'

// Product Example 

// URL: 
// 'https://fakestoreapi.com/products'

// Res JSON:
// [
//   {
//     "id": 0,
//     "title": "string",
//     "price": 0.1,
//     "description": "string",
//     "category": "string",
//     "image": "http://example.com"
//   }
// ]

export interface Product {
  id: number,
  title: string,
  price: number,            // Actual paid for user
  originalPrice?: number    // Origin price (Optional)
  description: string,
  category: string,
  image: string
  rating: {
    rate: number,
    count: number,
  }
}

export interface Banner {
  id: number
  title: string
  description: string
  image: string
  targetPath: string
  gender: 'women' | 'men' | 'child'
  isActive: boolean
  
  priceInfo?: {
    price: number
    originalPrice?: number
  }

  additionalText?: string     // Additional Text at the end e.g. "Promotion on 22 Sep - 18 Oct"
  
  // displayOrder: number

}


export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  
  if (!res.ok) throw new Error('ดึงข้อมูลสินค้าล้มเหลว')

  return res.json();
}


export async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!res.ok) throw new Error('ดึงข้อมูลสินค้าล้มเหลว')

  return res.json()

}


export async function getProductByGender(gender: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products/${gender}`);
  if (!res.ok) throw new Error('ดึงข้อมูลล้มเหลว')

  return res.json()

}