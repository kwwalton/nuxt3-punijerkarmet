import type { IncomingMessage, ServerResponse } from 'http'
import everything from '~/constants/mock-database-tables/everything'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const category = req.url.split('/')[1]
  const subcategory = req.url.split('/')[2]

  const categoryMatch = everything.find((x) => x.category === category).items

  const subcategoryMatch = categoryMatch.find(
    (x) => x.subcategory === subcategory
  )

  return subcategoryMatch || {}
}
