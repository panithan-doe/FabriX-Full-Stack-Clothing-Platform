import Link from 'next/link';
import { categoriesData, GenderType } from '@/lib/constants';

interface CategoryPageProps {
  params: Promise<{
    gender: string;
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { gender, category } = await params;
  
  // เช็กให้แน่ใจว่า gender ที่ส่งมามีอยู่ในข้อมูลของเรา (กัน Error)
  const isValidGender = gender === 'women' || gender === 'men' || gender === 'child';
  const currentGender = isValidGender ? (gender as GenderType) : 'women';

  // ดึงเมนูย่อยของเพศนั้นๆ มา
  const currentCategories = categoriesData[currentGender];

  return (
    // 💡 ใส่ pt-24 เพื่อดันเนื้อหาลงมา ไม่ให้โดน Header หลัก (สีใส) บัง
    <div className="min-h-screen pt-24">
      
      {/* =========================================
          SECTION 1: Category Navigation (Sub-Nav)
          ========================================= */}
      <div className="flex flex-wrap items-center gap-6 pb-4 border-b border-gray-200 mb-8">
        
        {/* ลิงก์ ALL [GENDER] */}
        <Link 
          href={`/${currentGender}`} // กลับไปหน้า Landing ของเพศนั้นๆ
          className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          ALL {currentGender.toUpperCase()}
        </Link>

        {/* ลูปลิงก์หมวดหมู่ต่างๆ */}
        {currentCategories.map((cat) => {
          // เช็กว่ากำลังอยู่หมวดหมู่นี้หรือเปล่า จะได้ทำตัวหนาๆ สีดำ
          const isActive = category === cat.slug;

          return (
            <Link
              key={cat.slug}
              href={`/${currentGender}/${cat.slug}`}
              className={`text-sm transition-colors ${
                isActive 
                  ? 'font-bold text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'font-semibold text-gray-500 hover:text-gray-900 pb-1'
              }`}
            >
              {cat.title}
            </Link>
          );
        })}
      </div>

      {/* =========================================
          SECTION 2: Hero Banner (เดี๋ยวเรามาทำต่อ)
          ========================================= */}
      <div className="w-full h-64 md:h-96 bg-gray-100 rounded-xl mb-12 flex items-center justify-center text-gray-400">
        <p>Hero Image for {gender} / {category}</p>
      </div>

      {/* =========================================
          SECTION 3: Filter & Product Grid (เดี๋ยวเรามาทำต่อ)
          ========================================= */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* แถบ Filter ด้านซ้าย */}
        <div className="w-full md:w-64 flex-shrink-0 bg-gray-50 p-4 rounded-lg h-96">
           <h3 className="font-bold mb-4">FILTERS</h3>
           <p className="text-gray-500 text-sm">ส่วนของ Filter จะอยู่ตรงนี้</p>
        </div>

        {/* Grid สินค้าด้านขวา */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {/* จำลองสินค้า */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="bg-gray-100 aspect-[3/4] rounded-lg"></div>
           ))}
        </div>
      </div>

    </div>
  );
}