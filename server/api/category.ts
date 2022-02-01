import type { IncomingMessage, ServerResponse } from 'http'
import mockDataBase from '~/constants/mock-database'
export default async (req: IncomingMessage, res: ServerResponse) => {
  const category = req.url.replace('/', '')
  const categoryToReturn = mockDataBase.categories.find(
    (item) => item.category.referenceName === category
  )
  if (categoryToReturn) {
    return categoryToReturn
  } else {
    res.statusCode = 404
    res.statusMessage = 'Category Not Found'
    res.end(`Could not find "${category}" in categories.`)
  }
}
