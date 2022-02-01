import vegetablesSubcategories from './mock-database-tables/vegetables-subcategories'
import vegetableFilters from './mock-database-tables/vegetables-filters'
import fruitsSubcategories from './mock-database-tables/fruits-subcategories'
import fruitsFilters from './mock-database-tables/fruits-filters'
export default {
  categories: [
    {
      category: {
        name: 'vegetables',
        referenceName: 'vegetables',
        url: '/vegetables',
        description: 'This is the description of the vegetables category',
        image: '/images/categories/vegetables.jpg',
        availableFilters: vegetableFilters,
        subcategories: vegetablesSubcategories
      }
    },
    {
      category: {
        name: 'fruits',
        referenceName: 'fruits',
        url: '/fruits',
        description: 'This is the description of the fruits category',
        image: '/images/categories/fruits.jpg',
        availableFilters: fruitsFilters,
        subcategories: fruitsSubcategories
      }
    },
    {
      category: {
        name: 'flowers',
        referenceName: 'flowers',
        url: '/flowers',
        description: 'This is the description of the flowers category',
        image: '/images/categories/flowers.jpg'
      }
    },
    {
      category: {
        name: 'herbs',
        referenceName: 'herbs',
        url: '/herbs',
        description: 'This is the description of the herbs category',
        image: '/images/categories/herbs.jpg'
      }
    },
    {
      category: {
        name: 'farm seed',
        referenceName: 'farm-seed',
        url: '/farm-seed',
        description: 'This is the description of the farm seed category',
        image: '/images/categories/farm-seed.jpg'
      }
    },
    {
      category: {
        name: 'tools & supplies',
        referenceName: 'tools-and-supplies',
        url: '/tools-and-supplies',
        description: 'This is the description of the tools & supply category',
        image: '/images/categories/tools-and-supplies.jpg'
      }
    },
    {
      category: {
        name: 'featured',
        referenceName: 'featured',
        url: '/featured',
        description: 'This is the description of the featured category',
        image: '/images/categories/featured.jpg'
      }
    },
    {
      category: {
        name: 'sale',
        referenceName: 'sale',
        url: '/sale',
        description: 'This is the description of the sale category',
        image: '/images/categories/sale.jpg'
      }
    }
  ],
  products: [
    {
      title: 'Tavor',
      subTitle: 'Organic Artichoke Seed',
      referenceName: 'tavorOrganicArtichokeSeed',
      url: '/tavor-organic-artichoke-seed',
      category: ' vegetables',
      subCategory: 'artichokes',
      description:
        'An improved Imperial Star type for low-input systems that features minimal spines for easier harvesting. The 2&ndash;3&apos; plants have an open habit and produce an average of 1&ndash;2 primary buds per plant, averaging about 3&ndash;4&quot; in diameter. Secondary buds average 5&ndash;7 per plant at 1 1/2&ndash;2&quot; in diameter. Perennial in Zone 7 and warmer; otherwise treat as an annual. USDA Certified Organic. Avg. 9,700 seeds/lb. Packet: 25 seeds.',
      price: '$1.99',
      image: ''
    }
  ]
}
