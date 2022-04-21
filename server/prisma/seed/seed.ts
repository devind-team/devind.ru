import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
//todo: механизм заполнения бд
const userData: Prisma.UserCreateInput[] = [{
    username: 'admin',
    sirName: '',
    lastName: '',
    firstName: '',
    agreement: new Date(1990, 1, 1),
    avatar: '',
    birthday: new Date(1990, 1, 1),
    createdAt: new Date(1990, 1, 1),
    email: 'admin@admin.ru',
    lastLogin: new Date(1990, 1, 1)
}]
async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })