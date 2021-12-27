import vegetables from './vegetables'
import { slug } from '~/utilities/slug'

const vegetablesList = vegetables.map((vegetable) => {
  return { name: vegetable, url: `/vegetables/${slug(vegetable)}` }
})

export default vegetablesList
