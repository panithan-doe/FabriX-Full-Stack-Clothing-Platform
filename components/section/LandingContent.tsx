import BannerItem from '@/components/product/BannerItem';
import { Banner } from '@/services/api/product'

interface LandingContentProps {
  gender: string
}

export default async function LandingContent({ gender }: LandingContentProps) {

  // Banner Items
  const bannerItems: Banner[] = [
    { 
      id: 1, 
      title: 'New Arrival', 
      description: 'test content \ndescription\n wow wow wow', 
      targetPath: 'shirts', 
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500', 
      gender: 'men',
      isActive: true,
      priceInfo: {
        price: 790,
        originalPrice: 990
      }
    },
    { 
      id: 2, 
      title: 'Uniqlo Shirts', 
      description: 'test content \ndescription\n wow wow wow', 
      targetPath: 'shirts', 
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500', 
      gender: 'men',
      isActive: true,
      priceInfo: {
        price: 790,
        originalPrice: 990
      }
    },
    { 
      id: 3, 
      title: 'New Arrival', 
      description: 'test content \ndescription\n wow wow wow', 
      targetPath: 'shirts', 
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500', 
      gender: 'child',
      isActive: true,
      priceInfo: {
        price: 990,
        originalPrice: 1490
      }
    },
    { 
      id: 4, 
      title: 'New Jeans', 
      description: 'test women \ndescription\n wow wow wow', 
      targetPath: 'pants', 
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500', 
      gender: 'women',
      isActive: true,
      priceInfo: {
        price: 990,
        originalPrice: 1490
      }
    },{ 
      id: 5, 
      title: 'Coat', 
      description: 'test content \ndescription\n wow wow wow', 
      targetPath: 'shirts', 
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500', 
      gender: 'women',
      isActive: true,
      priceInfo: {
        price: 990,
        originalPrice: 1490
      }
    },
  ];

  const filterdBanners = bannerItems.filter((banner) => banner.gender === gender && banner.isActive === true);

  return (

    // snap-y (เปิดระบบดูดแนวตั้ง), snap-mandatory (บังคับว่าต้องดูด ห้ามหยุดครึ่งๆ)
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      
      {filterdBanners.map((item) => (
        <BannerItem 
          key={item.id}
          data={item}
        />
      ))}

    </div>
  );
}