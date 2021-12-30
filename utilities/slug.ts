export function slug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[&]/g, 'and')
    .replace(/[^a-zA-Z0-9-]/g, '')
}
