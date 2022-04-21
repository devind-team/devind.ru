import { readdirSync, readFileSync } from 'fs'
import { extname, join } from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const path = __dirname
  const jsonsInDir = readdirSync(path).filter(file => extname(file) === '.json')
  for (const file of jsonsInDir) {
    console.log(`Seeding ${file}`)
    const fileData = readFileSync(join(path, file))
    const json = JSON.parse(fileData.toString())
    const table = file.split('.')[1]
    await prisma[table].createMany({ data: json })
  }
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
