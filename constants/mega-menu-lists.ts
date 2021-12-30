import vegetables from './vegetables'
import fruits from './fruits'
import { slug } from '~/utilities/slug'

const vegetablesList = vegetables.map((vegetable) => {
  return { name: vegetable, url: `/vegetables/${slug(vegetable)}` }
})

const fruitsList = fruits.map((fruit) => {
  return { name: fruit, url: `/fruits/${slug(fruit)}` }
})

export { vegetablesList, fruitsList }
