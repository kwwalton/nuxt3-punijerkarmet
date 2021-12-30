import vegetables from './vegetables'
import fruits from './fruits'
import flowers from './flowers'
import { slug } from '~/utilities/slug'

function subcategoryList(category: string, subcategories: Array<string>) {
  return subcategories.map((subcategory: string) => {
    return { name: subcategory, url: `/${category}/${slug(subcategory)}` }
  })
}

const vegetablesList = subcategoryList('vegetables', vegetables)
const fruitsList = subcategoryList('fruits', fruits)
const flowersList = subcategoryList('flowers', flowers)

export default [
  {
    name: 'vegetables',
    referenceName: 'vegetables',
    url: '/vegetables',
    subcategories: vegetablesList
  },
  {
    name: 'fruits',
    referenceName: 'fruits',
    url: '/fruits',
    subcategories: fruitsList
  },
  {
    name: 'flowers',
    referenceName: 'flowers',
    url: '/flowers',
    subcategories: flowersList
  },
  {
    name: 'herbs',
    referenceName: 'herbs',
    url: '/herbs',
    subcategories: []
  },
  {
    name: 'farm seed',
    referenceName: 'farmSeed',
    url: '/farm-seed',
    subcategories: []
  },
  {
    name: 'tools & supplies',
    referenceName: 'toolsAndSupplies',
    url: '/tools-and-supplies',
    subcategories: []
  },
  {
    name: 'featured',
    referenceName: 'featured',
    url: '/featured',
    subcategories: []
  },
  {
    name: 'sale',
    referenceName: 'sale',
    url: '/sale',
    subcategories: []
  }
]
