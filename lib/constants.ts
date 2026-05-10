export const categoriesData = {
  // women: [
  //   { slug: 'shirts', title: 'T-SHIRTS & SHIRTS', image: '/category-icons/women-shirts.avif' },
  //   { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/women-bottoms.avif'  },
  //   { slug: 'skirts', title: 'SKIRTS', image: '/category-icons/women-skirts.avif'  },
  //   { slug: 'outerwear', title: 'OUTERWEAR', image: '/category-icons/women-outerwear.avif'  },
  // ],
  // men: [
  //   { slug: 'shirts', title: 'T-SHIRTS & SHIRTS', image: '/category-icons/men-shirts.avif' },
  //   { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/men-bottoms.avif'  },
  //   { slug: 'outerwear', title: 'OUTERWEAR', image: '/category-icons/men-outerwear.avif'  },
  // ],
  // child: [
  //   { slug: 'tops', title: 'TOPS', image: '/category-icons/child-tops.avif'  },
  //   { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/childs-bottoms.avif'  }, 
  // ]
  women: [
    { slug: 'shirts', title: 'T-SHIRTS & SHIRTS', image: '/category-icons/men-shirts.avif' },
    { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/men-shirts.avif'  },
    { slug: 'skirts', title: 'SKIRTS', image: '/category-icons/men-shirts.avif'  },
    { slug: 'outerwear', title: 'OUTERWEAR', image: '/category-icons/men-shirts.avif'  },
    { slug: 'women-clothing', title: 'ALL WOMEN', image: '/category-icons/men-shirts.avif'  },
  ],
  men: [
    { slug: 'shirts', title: 'T-SHIRTS & SHIRTS', image: '/category-icons/men-shirts.avif' },
    { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/men-shirts.avif'  },
    { slug: 'outerwear', title: 'OUTERWEAR', image: '/category-icons/men-shirts.avif'  },
    { slug: 'men-clothing', title: 'ALL MEN', image: '/category-icons/men-shirts.avif'  },

  ],
  child: [
    { slug: 'tops', title: 'TOPS', image: '/category-icons/men-shirts.avif'  },
    { slug: 'bottoms', title: 'BOTTOMS', image: '/category-icons/men-shirts.avif'  }, 
    { slug: 'child-clothing', title: 'ALL CHILD', image: '/category-icons/men-shirts.avif'  },
  ]
}

export type GenderType = keyof typeof categoriesData;