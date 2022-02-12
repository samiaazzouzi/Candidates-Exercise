// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { initProfessionals } from '../resources/initProfessionals'
const prisma = new PrismaClient()

async function main() {
    await prisma.professional.createMany({
        data: initProfessionals,
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })